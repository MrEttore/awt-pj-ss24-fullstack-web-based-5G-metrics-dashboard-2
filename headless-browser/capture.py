import asyncio
from pyppeteer import launch
from dotenv import load_dotenv
import os, re, json
import aiohttp


# Load environment variables
load_dotenv(dotenv_path=".env.local")


# Import login data
auth_url = os.getenv("AUTH_LINK")
email = os.getenv("EMAIL")
password = os.getenv("PW")


async def intercept_websockets():
    try:
        # Launch the browser
        browser = await launch(
            headless=True,
            args=["--no-sandbox", "--disable-setuid-sandbox"],
            executablePath="/usr/bin/chromium",
        )
        page = await browser.newPage()

        # Set up WebSocket interception
        client = page._client
        await client.send("Network.enable")

        # Set up WebSocket interception with proper async handling
        setup_websocket_callbacks(client)

        # Open the authentication page and log in
        await page.goto(auth_url)
        await page.type("#username", email)
        await page.type("#password", password)
        await page.click("#kc-login")

        while True:
            await asyncio.sleep(5)  # periodically keep the loop active

    except Exception as e:
        print(f"Critical error, attempting to restart: {e}")
        await browser.close()
        await intercept_websockets()  # Restart on failure


def setup_websocket_callbacks(client):
    client.on(
        "Network.webSocketFrameReceived",
        lambda event: asyncio.ensure_future(
            log_websocket_frame("Network.webSocketFrameReceived", event)
        ),
    )
    client.on(
        "Network.webSocketFrameSent",
        lambda event: asyncio.ensure_future(
            log_websocket_frame("Network.webSocketFrameSent", event)
        ),
    )


async def log_websocket_frame(event_type, event):
    try:
        await filter_data(event["response"]["payloadData"])
    except Exception as e:
        print(f"Error processing websocket frame: {e}")


async def send_data(json_data, destination, timestamp, url_ending):
    try:
        url = f"http://nginx:80/api/{url_ending}"
        msg_obj = {
            "timestamp": timestamp,
            "destination": destination,
            "payload": json_data,
        }
        async with aiohttp.ClientSession() as session:
            async with session.post(
                url, json=msg_obj, headers={"Content-Type": "application/json"}
            ) as response:
                response_data = await response.text()  # Optionally process response
                print(f"Data sent: {msg_obj}")
    except Exception as e:
        print(f"Error sending data: {e}")


async def filter_data(text):
    try:
        lines = text.split("\n")
        destination = None
        for line in lines:
            if line.startswith("destination:"):
                destination = line
                break
        if destination:
            json_obj = extract_json_from_string(text)
            if json_obj:
                js = json.loads(json_obj)
                timestamp = js["timestamp"]
                print(f"time: {timestamp}")
                await send_data(json_obj, destination, timestamp, "messages")
    except Exception as e:
        print(f"Error filtering data: {e}")
        print(destination)


def extract_json_from_string(text):
    try:
        json_pattern = re.compile(r"(\{s*[^\}\{]{3,}?:.*\})", re.DOTALL)
        json_matches = json_pattern.findall(text)
        if json_matches:
            return json_matches[0]
        else:
            print("No JSON found")
    except Exception as e:
        print(f"Error extracting JSON: {e}")


async def main():
    while True:
        try:
            await intercept_websockets()
        except Exception as e:
            print(f"Critical error, restarting: {e}")
            await asyncio.sleep(1)  # Cool-down period before restart


if __name__ == "__main__":
    asyncio.run(main())

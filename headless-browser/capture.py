import asyncio
from pyppeteer import launch
from dotenv import load_dotenv
import os

# Load environment variables from .env.local
load_dotenv(dotenv_path="../.env.local")

# Import login data
auth_url = os.getenv('AUTH_LINK')
email = os.getenv('EMAIL')
password = os.getenv('PW')

async def intercept_websockets():
    # Launch the browser
    browser = await launch(headless=True, args=['--start-maximized', '--incognito'])
    page = await browser.newPage()

    # Intercept WebSocket messages
    def log_websocket_frame(event_type, event):
        if event_type == 'Network.webSocketFrameReceived':
            print(f"WebSocket Frame Received: {event['response']['payloadData']}")
        elif event_type == 'Network.webSocketFrameSent':
            print(f"WebSocket Frame Sent: {event['response']['payloadData']}")

    client = page._client
    await client.send('Network.enable')

    client.on('Network.webSocketFrameReceived', lambda event: log_websocket_frame('Network.webSocketFrameReceived', event))
    client.on('Network.webSocketFrameSent', lambda event: log_websocket_frame('Network.webSocketFrameSent', event))

    # Open the authentication page
    await page.goto(auth_url)

    # Fill in the email and password fields and log in
    await page.type('#username', email)
    await page.type('#password', password)
    await page.click('#kc-login')

    # Wait for a while to capture WebSocket messages
    await asyncio.sleep(60)  # Wait for 60 seconds

    # Close the browser
    await browser.close()

asyncio.get_event_loop().run_until_complete(intercept_websockets())

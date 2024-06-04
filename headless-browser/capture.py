import asyncio
from pyppeteer import launch
from dotenv import load_dotenv
import os, re, json

# Load environment variables from .env.local
load_dotenv(dotenv_path=".env.local")

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
            #print(f"WebSocket Frame Received: {event['response']['payloadData']}")
            # send_data(event['response']['payloadData'])
            filter_data(event['response']['payloadData'])
        elif event_type == 'Network.webSocketFrameSent':
            # print(f"WebSocket Frame Sent: {event['response']['payloadData']}")
            '''
            How do I find the useful data? Problem: Data is contained as json inside the websocket frame which are not json themselves
            Solution: Look for substrings that always occur before the json data --> extract_json_from_string
            '''
            # send_data(event['response']['payloadData'])
            filter_data(event['response']['payloadData'])
    
    def send_data(data):
        # Send json data to the backend server
        json_data = extract_json_from_string(data)
        if json_data:
            print(json_data)

    def filter_data(text):
        # send json objects to endpoints
        # endpoints vary in the gnb.x field e.g. gnb.logs, gnb.configuration
        # include the time
        # json object starts after the metadata e.g. content-length, content-type
        # different responses:
        # 1. start with absolutefrequency
        # 2. status messages start with status (not correctly captured so far)
        # 3. start with gnbId 

        # most messages are part of x.logs, x.details, x.telemetry, x.fronthaul or x.configuration
        # x can be gnb, cn5g or nothing
        # fronthaul always prepends nothing
        # telemtry can prepend everything

        lines = text.split('\n')
        destination = None
        for line in lines:
            if line.startswith('destination:'):
                destination = line.split(':', 1)[1].strip()
                break
        if destination:
            json = extract_json_from_string(text)
            if 'gnb.telemetry' in destination:
                send_data(json, 'gnb.telemetry')
            elif 'gnb.logs' in destination:
                send_data(json, 'gnb.logs')
            elif 'gnb.configuration' in destination:
                send_data(json, 'gnb.configuration')
            elif 'gnb.details' in destination:
                send_data(json, 'gnb.details')
            elif 'cn5g.telemetry' in destination:
                send_data(json, 'cn5g.telemtry')

    def extract_json_from_string(text):
        # Regular expression to find JSON objects within a string
        json_pattern = re.compile(r'\{.*?\}')

        # Find all JSON substrings
        json_matches = json_pattern.findall(text)
        
        extracted_data = []
        
        for match in json_matches:
            try:
                # Parse JSON
                data = json.loads(match)
                extracted_data.append(data)
            except json.JSONDecodeError:
                # Handle invalid JSON if necessary
                pass
        if len(extracted_data) > 0:
            print(extracted_data)
            return extracted_data


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

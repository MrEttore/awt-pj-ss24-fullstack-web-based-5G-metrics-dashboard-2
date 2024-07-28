const model = require('../model/messages.model');

const logsEntry = {
    timestamp: 1715076982855,
    destination: 'gnb.logs',
    payload: '{"timestamp":1715076982855,"payload":"UE a393: UL-RI 1, TPMI 0"}'
};

const telemetryEntry = {
    timestamp: 1715085257102,
    destination: 'gnb.telemetry',
    payload: `{
            "id": 12345678,
            "frame": 800,
            "slot": 4,
            "pci": 0,
            "dlCarrierFreq": 3349380000,
            "ulCarrierFreq": 3349380000,
            "ues": [
                {
                    "ueId": "1",
                    "rnti": "a393",
                    "inSync": 1,
                    "dlBytes": 913141864,
                    "dlMcs": 9,
                    "dlBler": 0,
                    "ulBytes": 282731733,
                    "ulMcs": 9,
                    "ulBler": 0,
                    "ri": 2,
                    "pmi": "(0,0)",
                    "phr": 58,
                    "pcmax": 23,
                    "rsrq": -10.5,
                    "sinr": 23.5,
                    "rsrp": -96,
                    "rssi": 85.5,
                    "cqi": 9,
                    "pucchSnr": 20,
                    "puschSnr": 28.5
                }
            ],
            "avgLdpcIterations": 3,
            "timestamp": 1715085257102
        }`
}

async function main() {
    // Initialize model
    await model.init();
    
    // Execute tests
    await testAdd();
    await testGet();
    await testGetTelemetry();
    await testGetUEs();
}

beforeEach(async () => {
    await model.init();
});

afterEach(async () => {
    // Close database or perform any cleanup if necessary
});

test('test add', async () => {
    await testAdd();
});

test('test get', async () => {
    await testGet();
});

test('test getTelemetry', async () => {
    await testGetTelemetry();
});

test('test getUEs', async () => {
    await testGetUEs();
});

test('test getLatestTimestamp', async () => {
    await testGetLatestTimestamp();
});

test('test add gnb.telemetry', async () => {
    await testAddTelemetry();
})

async function testAdd() {
    console.log('[testAdd] default');
    await model.add(logsEntry.timestamp, logsEntry.destination, logsEntry.payload);
    console.log('Success\n');

    console.log('[testAdd] Omit timestamp');
    try {
        await model.add(undefined, logsEntry.destination, logsEntry.payload);
    } catch (error) {
        console.log('Success');
    }

    console.log('[testAdd] Omit destination');
    try {
        await model.add(logsEntry.timestamp, undefined, logsEntry.payload);
    } catch (error) {
        console.log('Success');
    }

    console.log('[testAdd] Omit payload');
    try {
        await model.add(logsEntry.timestamp, logsEntry.destination, undefined);
    } catch (error) {
        console.log('Success');
    }
}

async function testAddTelemetry() {
    await model.add(telemetryEntry.timestamp, telemetryEntry.destination, telemetryEntry.payload);
}

async function testGet() {
    console.log('[model.get] default');
    await model.get(model.topics.LOGS);

    console.log('[model.get] default with time interval');
    await model.get(model.topics.LOGS, 0, Infinity);

    console.log('[model.get] startTime, no endTime');
    await model.get(model.topics.LOGS, 0);

    console.log('[model.get] endTime, no startTime');
    await model.get(model.topics.LOGS, undefined, Infinity);

    console.log('[model.get] no params');
    try {
        await model.get();
    } catch (error) {
        console.log('Expected error: Missing topic');
    }

    console.log('[model.get] invalid interval');
    try {
        await model.get(model.topics.LOGS, 1, 0);
    } catch (error) {
        console.log('Expected error: Invalid interval');
    }

    console.log('[model.get] invalid topic');
    try {
        await model.get('invalid.topic');
    } catch (error) {
        console.log('Expected error: Invalid topic');
    }

    console.log('[model.get] with limit')
    await model.get(model.topics.LOGS, 0, 1, 1);
}

async function testGetTelemetry() {
    console.log('[model.getTelemetry] get all records');
    await model.getTelemetry();

    console.log('[model.getTelemetry] with time interval');
    await model.getTelemetry(0, Infinity);

    console.log('[model.getTelemetry] startTime, no endTime');
    await model.getTelemetry(0);

    console.log('[model.getTelemetry] endTime, no startTime');
    await model.getTelemetry(undefined, Infinity);

    console.log('[model.getTelemetry] invalid interval');
    try {
        await model.getTelemetry(1, 0);
    } catch (error) {
        console.log('Expected error: Invalid interval');
    }

    console.log('[model.getTelemetry] with limit')
    await model.getTelemetry(undefined, undefined, 1)

    console.log('[model.getTelemetry] ues list');
    await model.getTelemetry(0, Infinity, undefined, ['1', '2', '3']);
}

async function testGetUEs() {
    console.log('[model.getUEs] get all records, no interval');
    await model.getUEs();

    console.log('[model.getUEs] with interval');
    await model.getUEs(0, Infinity);

    console.log('[model.getUEs] startTime, no endTime');
    await model.getUEs(0);

    console.log('[model.getUEs] endTime, no startTime');
    await model.getUEs(undefined, Infinity);

    console.log('[model.getUEs] invalid interval');
    try {
        await model.getUEs(1, 0);
    } catch (error) {
        console.log('Expected error: Invalid interval');
    }
}

async function testGetLatestTimestamp() {
    // default
    const latestTimestamp = await model.getLatestTimestamp(model.topics.LOGS)
    console.log(latestTimestamp)

    // invalid topic
    try {
        await model.getLatestTimestamp('invalid.topic')
    } catch (error) {}
}

// Uncomment to run manually
// main();

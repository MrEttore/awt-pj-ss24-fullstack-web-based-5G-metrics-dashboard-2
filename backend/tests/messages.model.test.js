const assert = require('assert')
const { deleteConnection } = require('../database/sqlite3DatabaseAdapter');
const model = require('../model/messages.model');

const LOGS_ROW = require('./data/gnbLogsMessage.json');
const GNB_TELEMETRY_ROW = require('./data/gnbTelemetryMessage.json');

const LOGS_PAYLOAD = require('./data/gnbLogsPayload.json');
const TELEMETRY_PAYLOAD = require('./data/gnbTelemetryPayload.json');

const { MAX_TIME } = model.constants;

beforeAll(async () => {
    process.env.DB_PATH = ':memory:'
})

beforeEach(async () => {
    await model.init();
});

afterEach(async () => {
    await deleteConnection();
})

test('Get non existent row', async () => {
    const TOPIC = model.topics.LOGS;
    const EXPECTED_ROWS = []

    let rows = await model.get(TOPIC)
    assert.deepEqual(rows, EXPECTED_ROWS);
})

/**
 *  timestamp   destination     payload     expected
 *  ...         'gnb.logs'      ...         rowID
 */
test('Add row default', async () => {
    let id = await model.add( ...Object.values(LOGS_ROW) );
    assert.ok(id);
})

test('Add row gnbTelemetry', async () => {
    const {timestamp, destination, payload} = GNB_TELEMETRY_ROW;
    let id = await model.add(timestamp, destination, payload);
    assert.ok(id)
});

test('Add row gnbTelemetry invalid payload', async () => {
    const DESTINATION = model.topics.TELEMETRY;
    const PAYLOAD = { timestamp: 123, payload: 'abc' };

    const EXPECTED_MESSAGE = 'Invalid payload'

    assert.rejects(async () => {
        await model.add(1, DESTINATION, PAYLOAD);
    },
        EXPECTED_MESSAGE
    );
})

/**
 * timestamp    destination     payload     expected
 * undefined    undefined       undefined   Error(...)
 */
test('Add row missing parameters', async () => {
    const EXPECTED_MESSAGE = 'Missing parameters';

    assert.rejects(async () => {
        await model.add(undefined, undefined, undefined)
    },
        EXPECTED_MESSAGE
    );
})

/**
 * timestamp      destination   payload  expected
 * ...            ...           {}       Error
 */
test('Add row invalid payload', async () => {
    // should be a string
    const PAYLOAD = {timestamp: 123}
    const EXPECTED_MESSAGE = 'Invalid payload';

    assert.rejects(async () => {
        await model.add(LOGS_ROW.timestamp, LOGS_ROW.destination, PAYLOAD)
    },
        EXPECTED_MESSAGE
    );
})

/**
 *  id      expected
 *  lastID  LOGS_ROW.payload
 */
test('getByID default', async () => {
    const { timestamp, destination, payload } = LOGS_ROW;
    const EXPECTED_PAYLOAD = JSON.parse(LOGS_ROW.payload)

    let lastID = await model.add(timestamp, destination, payload);
    let row = await model.getByID(lastID);
    console.log(row)

    assert.deepEqual(row, EXPECTED_PAYLOAD);
})

/**
 * try to get row that does not exist
 */
test('getByID undefined', async () => {
    // row does not exist
    let id = 999;

    const EXPECTED_MESSAGE = 'Error retrieving message by ID';

    assert.rejects(async () => {
        await model.getByID(id) 
    },
        EXPECTED_MESSAGE
    )
})

test('get default', async () => {
    let id = await model.add(...Object.values(LOGS_ROW))
    let EXPECTED_PAYLOAD = JSON.parse(LOGS_ROW.payload);

    let rows = await model.get(model.topics.LOGS)
    assert.deepEqual(rows[0], EXPECTED_PAYLOAD)
})

test('get with interval', async () => {
    const { destination, payload } = LOGS_ROW
    const TIMESTAMP = 1

    const TOPIC = model.topics.LOGS;

    const EXPECTED_ROWS_LENGTH = 1;
    const EXPECTED_ROW = JSON.parse(payload);

    await Promise.all([
        model.add(TIMESTAMP - 1, destination, payload),
        model.add(TIMESTAMP, destination, payload),
        model.add(TIMESTAMP + 1, destination, payload)
    ]);

    let rows = await model.get(TOPIC, TIMESTAMP, TIMESTAMP)

    assert.equal(rows.length, EXPECTED_ROWS_LENGTH);
    assert.deepEqual(rows[0], EXPECTED_ROW);
})

test('get with interval, no timeEnd', async () => {
    const DESTINATION = LOGS_ROW.destination
    const TIMESTAMP = 1

    const PAYLOAD_0 = '{"timestamp": 0}'
    const PAYLOAD_1 = '{"timestamp": 1}'
    const PAYLOAD_2 = '{"timestamp": 2}'

    const TOPIC = model.topics.LOGS;

    const EXPECTED_ROWS_LENGTH = 2;

    // get should return PAYLOAD_1 and PAYLOAD_2
    const EXPECTED_ROW_0 = JSON.parse(PAYLOAD_1);
    const EXPECTED_ROW_1 = JSON.parse(PAYLOAD_2);

    await Promise.all([
        model.add(TIMESTAMP - 1, DESTINATION, PAYLOAD_0),
        model.add(TIMESTAMP, DESTINATION, PAYLOAD_1),
        model.add(TIMESTAMP + 1, DESTINATION, PAYLOAD_2)
    ]);

    let rows = await model.get(TOPIC, TIMESTAMP);

    assert.equal(rows.length, EXPECTED_ROWS_LENGTH);

    assert.deepEqual(rows[0], EXPECTED_ROW_0);
    assert.deepEqual(rows[1], EXPECTED_ROW_1);
})

test('get with interval, no timeStart', async () => {
    const { destination } = LOGS_ROW
    const TIMESTAMP = 1

    const PAYLOAD_0 = '{"timestamp": 0}'
    const PAYLOAD_1 = '{"timestamp": 1}'
    const PAYLOAD_2 = '{"timestamp": 2}'

    const TOPIC = model.topics.LOGS;

    const EXPECTED_ROWS_LENGTH = 2;

    // get should return PAYLOAD_1 and PAYLOAD_2
    const EXPECTED_ROW_0 = JSON.parse(PAYLOAD_0);
    const EXPECTED_ROW_1 = JSON.parse(PAYLOAD_1);

    await Promise.all([
        model.add(TIMESTAMP - 1, destination, PAYLOAD_0),
        model.add(TIMESTAMP, destination, PAYLOAD_1),
        model.add(TIMESTAMP + 1, destination, PAYLOAD_2)
    ]);

    let rows = await model.get(TOPIC, undefined, TIMESTAMP);

    assert.equal(rows.length, EXPECTED_ROWS_LENGTH);

    assert.deepEqual(rows[0], EXPECTED_ROW_0);
    assert.deepEqual(rows[1], EXPECTED_ROW_1);
})

test('get with invalid interval', async () => {
    // does not require setup

    const TOPIC = model.topics.LOGS
    const TIME_START = 1
    const TIME_END = 0

    const EXPECTED_MESSAGE = 'Invalid time interval'

    assert.rejects(async () => {
        await model.get(TOPIC, TIME_START, TIME_END)
    },
        EXPECTED_MESSAGE
    )
})

test('get, invalid topic', async () => {
    const TOPIC = 'invalid'

    const EXPECTED_MESSAGE = 'Invalid topic'

    assert.rejects(async () => {
        await model.get(TOPIC);
    },
        EXPECTED_MESSAGE
    )
})

test('get, specify limit', async () => {
    const { destination } = LOGS_ROW;

    const TIMESTAMP_0 = 0;
    const TIMESTAMP_1 = 1;

    const PAYLOAD_0 = '{"timestamp": 0}';
    const PAYLOAD_1 = '{"timestamp": 1}';

    await model.add(TIMESTAMP_0, destination, PAYLOAD_0);
    await model.add(TIMESTAMP_1, destination, PAYLOAD_1);

    const TOPIC = model.topics.LOGS;
    const LIMIT = 1

    const EXPECTED_ROWS_LENGTH = 1
    const EXPECTED_ROW = JSON.parse(PAYLOAD_0);

    const rows = await model.get(TOPIC, undefined, undefined, LIMIT);

    assert.equal(rows.length, EXPECTED_ROWS_LENGTH);
    assert.deepEqual(rows[0], EXPECTED_ROW);
})

/**
 *  timeStart       timeEnd         limit       expected
 *  undefined       undefined       undefined   payload
 */
test('getUEs default, 1 ueId', async () => {
    await model.add(...Object.values(GNB_TELEMETRY_ROW));
    
    const EXPECTED_ROWS_LENGTH = 1
    const EXPECTED_ROWS = ['204']

    let rows = await model.getUEs();

    assert.equal(rows.length, EXPECTED_ROWS_LENGTH)
    assert.deepEqual(rows, EXPECTED_ROWS);
})

test('getUEs, time interval', async () => {
    // setup
    const TIMESTAMP = 1

    const DESTINATION = GNB_TELEMETRY_ROW.destination;

    const PAYLOAD_0 = {...TELEMETRY_PAYLOAD, timestamp: 0}
    const PAYLOAD_1 = {...TELEMETRY_PAYLOAD, timestamp: 1}

    PAYLOAD_1.ues[0].ueId = '1'

    const TOPIC = model.topics.TELEMETRY

    await model.add(0, DESTINATION, JSON.stringify(PAYLOAD_0))
    await model.add(TIMESTAMP, DESTINATION, JSON.stringify(PAYLOAD_1))

    const EXPECTED_ROWS_LENGTH = 1
    const EXPECTED_ROWS = ['1']

    let rows = await model.getUEs(TIMESTAMP, TIMESTAMP);

    assert.equal(rows.length, EXPECTED_ROWS_LENGTH)
    assert.deepEqual(rows, EXPECTED_ROWS);
})

test('getUEs, invalid time interval', async () => {
    const TIME_START = 1
    const TIME_END = 0

    const EXPECTED_MESSAGE = 'Invalid time interval'

    assert.rejects(async () => {
        await model.getUEs(TIME_START, TIME_END)
    }, 
        EXPECTED_MESSAGE
    )
})

test('getUEs, multiple ueIds', async () => {
    const PAYLOAD_JSON = require('./data/gnbTelemetryPayloadUeIds.json');

    const TIMESTAMP = 1;
    const DESTINATION = model.topics.TELEMETRY;
    const PAYLOAD = JSON.stringify(PAYLOAD_JSON);

    await model.add(TIMESTAMP, DESTINATION, PAYLOAD);

    const EXPECTED_UES_LENGTH = 2
    const EXPECTED_UES = ['204', '1'] 

    let ues = await model.getUEs();

    assert.equal(ues.length, EXPECTED_UES_LENGTH);
    assert.deepEqual(ues, EXPECTED_UES);
})

test('getLatest, default', async () => {
    const PAYLOAD_0 = '{"payload": 0}'
    const PAYLOAD_1 = '{"payload": 1}'

    const DESTINATION = LOGS_ROW.destination

    // reverse order when adding
    await model.add(1, DESTINATION, PAYLOAD_1)
    await model.add(0, DESTINATION, PAYLOAD_0)

    const TOPIC = model.topics.LOGS;
    const EXPECTED_ROW = JSON.parse(PAYLOAD_1)

    let row = await model.getLatest(TOPIC)

    assert.deepEqual(row, EXPECTED_ROW)
})

test('getLatest, invalid topic', async () => {
    const TOPIC = 'invalid'

    const EXPECTED_MESSAGE = 'Invalid topic'

    assert.rejects(async () => {
        await model.getLatest(TOPIC)
    }, 
        EXPECTED_MESSAGE
    )
})


// Uncomment to run manually
// main();

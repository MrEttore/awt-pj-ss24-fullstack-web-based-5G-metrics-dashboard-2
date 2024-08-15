const sqlite3 = require('sqlite3').verbose();
const model = require('../cn5g.telemetry.model'); // Importiere die Singleton-Instanz

let testDb;

beforeAll(async () => {
    testDb = new sqlite3.Database(':memory:');
    model.setDb(testDb);
});

beforeEach(async () => {
    await model.init();
});

afterEach(() => {
    testDb.run('DROP TABLE IF EXISTS Cn5gTelemetry;');
});

afterAll(() => {
    testDb.close();
});

// test('should initialize the database', async () => {
//     await expect(model.init()).resolves.toBeUndefined();
//     expect(testDb.run).toHaveBeenCalledWith(INIT, expect.any(Function));
// });

test('should add a new telemetry entry to the database', async () => {
    const testData = {
        timestamp: Date.now(),
        amf: { status: 'OK', message: 'All good' },
        ausf: { status: 'OK', message: 'All good' },
        nrf: { status: 'OK', message: 'All good' },
        smf: { status: 'OK', message: 'All good' },
        upf: { status: 'OK', message: 'All good' },
        udm: { status: 'OK', message: 'All good' },
        udr: { status: 'OK', message: 'All good' },
        nssf: { status: 'OK', message: 'All good' },
        nef: { status: 'OK', message: 'All good' },
        mysql: { status: 'OK', message: 'All good' },
        extdn: { status: 'OK', message: 'All good' },
        asterisk: { status: 'OK', message: 'All good' },
        openspeedtest: { status: 'OK', message: 'All good' },
        oaiExtDnUplinkState: 'Some state',
        oaiExtDnDownlinkInstances: 5
    };
    const lastID = await model.add(testData);
    expect(lastID).toBeGreaterThan(0);
});

test('should retrieve a telemetry entry by ID', async () => {
    const testData = {
        timestamp: Date.now(),
        amf: { status: 'OK', message: 'All good' },
        ausf: { status: 'OK', message: 'All good' },
        nrf: { status: 'OK', message: 'All good' },
        smf: { status: 'OK', message: 'All good' },
        upf: { status: 'OK', message: 'All good' },
        udm: { status: 'OK', message: 'All good' },
        udr: { status: 'OK', message: 'All good' },
        nssf: { status: 'OK', message: 'All good' },
        nef: { status: 'OK', message: 'All good' },
        mysql: { status: 'OK', message: 'All good' },
        extdn: { status: 'OK', message: 'All good' },
        asterisk: { status: 'OK', message: 'All good' },
        openspeedtest: { status: 'OK', message: 'All good' },
        oaiExtDnUplinkState: 'Some state',
        oaiExtDnDownlinkInstances: 5
    };
    const lastID = await model.add(testData);
    const entry = await model.get(lastID);
    expect(entry).toBeDefined();
    expect(entry.timestamp).toBe(testData.timestamp);
    expect(entry.amf.status).toBe(testData.amf.status);
    expect(entry.amf.message).toBe(testData.amf.message);
});

test('should retrieve all telemetry entries within a time range', async () => {
    const timeStart = Date.now();
    const testData1 = {
        timestamp: timeStart + 1000,
        amf: { status: 'OK', message: 'All good' },
        ausf: { status: 'OK', message: 'All good' },
        nrf: { status: 'OK', message: 'All good' },
        smf: { status: 'OK', message: 'All good' },
        upf: { status: 'OK', message: 'All good' },
        udm: { status: 'OK', message: 'All good' },
        udr: { status: 'OK', message: 'All good' },
        nssf: { status: 'OK', message: 'All good' },
        nef: { status: 'OK', message: 'All good' },
        mysql: { status: 'OK', message: 'All good' },
        extdn: { status: 'OK', message: 'All good' },
        asterisk: { status: 'OK', message: 'All good' },
        openspeedtest: { status: 'OK', message: 'All good' },
        oaiExtDnUplinkState: 'Some state',
        oaiExtDnDownlinkInstances: 5
    };
    const testData2 = {
        timestamp: timeStart + 2000,
        amf: { status: 'OK', message: 'All good' },
        ausf: { status: 'OK', message: 'All good' },
        nrf: { status: 'OK', message: 'All good' },
        smf: { status: 'OK', message: 'All good' },
        upf: { status: 'OK', message: 'All good' },
        udm: { status: 'OK', message: 'All good' },
        udr: { status: 'OK', message: 'All good' },
        nssf: { status: 'OK', message: 'All good' },
        nef: { status: 'OK', message: 'All good' },
        mysql: { status: 'OK', message: 'All good' },
        extdn: { status: 'OK', message: 'All good' },
        asterisk: { status: 'OK', message: 'All good' },
        openspeedtest: { status: 'OK', message: 'All good' },
        oaiExtDnUplinkState: 'Some state',
        oaiExtDnDownlinkInstances: 5
    };
    await model.add(testData1);
    await model.add(testData2);
    const entries = await model.getAll({ timeStart, timeEnd: timeStart + 3000 });
    expect(entries.length).toBe(2);
    expect(entries[0].timestamp).toBe(testData1.timestamp);
    expect(entries[1].timestamp).toBe(testData2.timestamp);
});

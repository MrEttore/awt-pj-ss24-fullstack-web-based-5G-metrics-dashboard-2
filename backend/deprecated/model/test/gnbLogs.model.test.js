const sqlite3 = require('sqlite3').verbose();

let testDb;
let gnbLogsModel;

beforeAll(async () => {
    testDb = new sqlite3.Database(':memory:');
    gnbLogsModel = require('../gnbLogs.model');
    gnbLogsModel.setDb(testDb)
});

beforeEach(async () => {
    await gnbLogsModel.init()
})

afterEach(() => {
    testDb.run('DROP TABLE GnbLogs;')
})

afterAll(() => {
    testDb.close();
});

test('should add a new log entry to the database', async () => {
    const testData = { payload: 'test payload', timestamp: Date.now() };
    const lastID = await gnbLogsModel.add(testData);
    expect(lastID).toBeGreaterThan(0);
});

test('should retrieve a log entry by ID', async () => {
    const testData = { payload: 'test payload', timestamp: Date.now() };
    const lastID = await gnbLogsModel.add(testData);
    const entry = await gnbLogsModel.get(lastID);
    expect(entry.payload).toBe(testData.payload);
    expect(entry.timestamp).toBe(testData.timestamp);
});

test('should retrieve all log entries within a time range', async () => {
    const timeStart = Date.now();
    const testData1 = { payload: 'test payload 1', timestamp: timeStart + 1000 };
    const testData2 = { payload: 'test payload 2', timestamp: timeStart + 2000 };
    await gnbLogsModel.add(testData1);
    await gnbLogsModel.add(testData2);
    const entries = await gnbLogsModel.getAll({ timeStart, timeEnd: timeStart + 3000 });
    expect(entries.length).toBe(2);
    expect(entries[0].payload).toBe(testData1.payload);
    expect(entries[1].payload).toBe(testData2.payload);
});


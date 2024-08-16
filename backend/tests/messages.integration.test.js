const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('../routes/messages.router');
const { deleteConnection } = require('../database/sqlite3DatabaseAdapter');
const LOGS_ROW = require('./data/gnbLogsMessage.json');
const GNB_TELEMETRY_ROW = require('./data/gnbTelemetryMessage.json');

// Set up the Express app for testing
const app = express();
app.use(bodyParser.json());
app.use('/api/messages', router);

beforeAll(async () => {
    process.env.DB_PATH = ':memory:';
});

beforeEach(async () => {
    await require('../model/messages.model').init();
});

afterEach(async () => {
    await deleteConnection();
});

describe('Messages API Integration Tests', () => {
    test('POST /api/messages - Add row default', async () => {
        const response = await request(app)
            .post('/api/messages')
            .send(LOGS_ROW);

        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe('Message added successfully');
    });

    test('POST /api/messages - Add row with invalid payload', async () => {
        const response = await request(app)
            .post('/api/messages')
            .send({
                timestamp: 1,
                destination: 'telemetry',
                payload: { invalid: 'payload' }
            });

        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe('Error: Invalid payload JSON format');
    });

    test('POST /api/messages - Add row missing parameters', async () => {
        const response = await request(app)
            .post('/api/messages')
            .send({});

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe('Missing required fields');
    });

    test('GET /api/messages - Get non existent row', async () => {
        const response = await request(app).get('/api/messages?topic=logs');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
    });

    test('GET /api/messages - Get row with interval', async () => {
        // Add messages at different timestamps
        const LOGS_PAYLOAD_0 = '{"timestamp": 0}'
        const LOGS_PAYLOAD_1 = '{"timestamp": 1}'
        const LOGS_PAYLOAD_2 =  '{"timestamp": 2}'

        await request(app).post('/api/messages').send({ ...LOGS_ROW, payload: LOGS_PAYLOAD_0, timestamp: 0 });
        await request(app).post('/api/messages').send({ ...LOGS_ROW, payload: LOGS_PAYLOAD_1, timestamp: 1 });
        await request(app).post('/api/messages').send({ ...LOGS_ROW, payload: LOGS_PAYLOAD_2,  timestamp: 2 });

        const response = await request(app).get('/api/messages?topic=logs&timeStart=1&timeEnd=1');

        console.log(response.body)

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
        expect(response.body[0]).toEqual(JSON.parse(LOGS_PAYLOAD_1));
    });

    test('GET /api/messages/telemetry/ues - Get UEs default, 1 ueId', async () => {
        await request(app)
            .post('/api/messages')
            .send(GNB_TELEMETRY_ROW);

        const response = await request(app).get('/api/messages/telemetry/ues');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(['204']);
    });

    test('GET /api/messages/latest - Get latest message for topic', async () => {
        const PAYLOAD_0 = '{"timestamp": 0}';
        const PAYLOAD_1 = '{"timestamp": 1}';

        await request(app).post('/api/messages').send({ ...LOGS_ROW, payload: PAYLOAD_0, timestamp: 0 });
        await request(app).post('/api/messages').send({ ...LOGS_ROW, payload: PAYLOAD_1, timestamp: 1 });

        const response = await request(app).get('/api/messages/latest?topic=logs');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ timestamp: 1 });
    });
});

const { getConnection } = require("../database/sqlite3DatabaseAdapter");
// const logger = require('../utils/logger');  // Assuming a logger utility is used
const logger = console;

module.exports.topics = Object.freeze({
    TELEMETRY: 'gnb.telemetry',
    HEALTH: 'cn5g.telemetry',
    LOGS: 'gnb.logs',
    GNB_STATUS: 'ba.telemetry'
});

module.exports.topicsKey = [
    'gnbTelemetry', 'health', 'logs', 'telemetry'
];

const MIN_TIME = 0;
const MAX_TIME = 9_999_999_999_999;
const LIMIT = 100;

module.exports.constants = Object.freeze({
    MIN_TIME, MAX_TIME
});

let connection;

module.exports.init = async function () {
    try {
        connection = await getConnection();
        await Promise.all([initMessages(), initUes()]);
        logger.info('Database initialized successfully.');
    } catch (err) {
        logger.error('Error initializing database:', err);
        throw new Error('Failed to initialize the database');
    }
};

async function initMessages() {
    const CREATE = `
        CREATE TABLE IF NOT EXISTS Messages (
            rowId INTEGER PRIMARY KEY NOT NULL,
            timestamp BIGINT NOT NULL,
            destination TEXT NOT NULL,
            payload TEXT NOT NULL
        );
    `;
    try {
        let connection = await getConnection();
        await connection.run(CREATE);
        logger.info('Messages table initialized successfully.');
    } catch (err) {
        logger.error('Error initializing Messages table:', err);
        throw new Error('Failed to initialize Messages table');
    }
}

async function initUes() {
    const SQL = `
        CREATE TABLE IF NOT EXISTS Ues (
            rowId INTEGER PRIMARY KEY,
            timestamp BIGINT NOT NULL,
            ueId TEXT NOT NULL
        );  
    `;
    try {
        let connection = await getConnection();
        await connection.run(SQL);
        logger.info('Ues table initialized successfully.');
    } catch (err) {
        logger.error('Error initializing Ues table:', err);
        throw new Error('Failed to initialize Ues table');
    }
}

/**
 * Adds a message to the Messages table.
 */
module.exports.add = async function (timestamp, destination, payload) {
    // Verify parameters
    if (isNaN(timestamp) || !destination || !payload) {
        const errMsg = 'Missing or invalid parameters for add method';
        logger.error(errMsg, { timestamp, destination, payload });
        throw new Error(errMsg);
    }

    try {
        JSON.parse(payload);
    } catch (e) {
        const errMsg = 'Invalid payload JSON format';
        logger.error(errMsg, { payload });
        throw new Error(errMsg);
    }

    try {
        const lastID = await addMessage(timestamp, destination, payload);
        const payloadObj = JSON.parse(payload);

        // Maintain a separate Ues table to improve performance of getUEs
        if (destination.endsWith('gnb.telemetry') && payloadObj.ues) {
            for (let uesElement of payloadObj.ues) {
                await addUe(timestamp, uesElement.ueId);
            }
        }

        logger.info('Message added successfully', { lastID, timestamp, destination });
        return lastID;
    } catch (err) {
        logger.error('Error adding message:', err);
        throw new Error('Failed to add message to the database');
    }
};

async function addUe(timestamp, ueId) {
    const SQL = `
        INSERT INTO Ues (timestamp, ueId)
        VALUES (${timestamp}, '${ueId}')
    `;

    try {
        let connection = await getConnection();
        let lastID = await connection.run(SQL);
        logger.info('UE added successfully', { timestamp, ueId, lastID });
        return lastID;
    } catch (err) {
        logger.error('Error adding UE:', err);
        throw new Error('Failed to add UE to the database');
    }
}

async function addMessage(timestamp, destination, payload) {
    const SQL = `
        INSERT INTO Messages (timestamp, destination, payload)
        VALUES (${timestamp}, '${destination}', '${payload}')
    `;

    try {
        let connection = await getConnection();
        const lastID = await connection.run(SQL);
        logger.info('Message added successfully', { lastID, timestamp, destination });
        return lastID;
    } catch (err) {
        logger.error('Error adding message:', err);
        throw new Error('Failed to add message to the database');
    }
}

function applyDataReduction(rows, limit = LIMIT) {
    if (rows.length <= limit) {
        return rows;
    }

    const step = Math.ceil(rows.length / limit);
    const reducedRows = [];

    for (let i = 0; i < rows.length && reducedRows.length < limit; i += step) {
        reducedRows.push(rows[i]);
    }

    return reducedRows;
}

/**
 * GET /api/messages?topic=_&timeStart=_&timeEnd=_
 */
module.exports.get = async function (topic, timeStart = MIN_TIME, timeEnd = MAX_TIME, limit = LIMIT) {
    if (!Object.values(this.topics).includes(topic)) {
        const errMsg = `Invalid topic: ${topic}`;
        logger.error(errMsg);
        throw new Error(errMsg);
    }
    if (isNaN(timeStart) || isNaN(timeEnd) || timeEnd < timeStart) {
        const errMsg = `Invalid time interval: timeStart=${timeStart}, timeEnd=${timeEnd}`;
        logger.error(errMsg);
        throw new Error(errMsg);
    }

    const SQL = `SELECT payload FROM Messages
        WHERE ${timeStart} <= timestamp 
        AND timestamp <= ${timeEnd}
        AND destination LIKE '%${topic}'
        ORDER BY timestamp ASC
    `;

    try {
        let connection = await getConnection();
        let rows = await connection.all(SQL)
            .then(rows => rows.map(row => row.payload))
            .then(rows => rows.map(JSON.parse))
            .then(rows => applyDataReduction(rows, limit));

        logger.info('Messages retrieved successfully', { topic, timeStart, timeEnd, limit });
        return rows;
    } catch (err) {
        logger.error('Error retrieving messages:', err);
        throw new Error('Failed to retrieve messages');
    }
}

module.exports.getTelemetry = async function (timeStart, timeEnd, limit, ueIds = []) {
    try {
        let rows = await this.get(this.topics.TELEMETRY, timeStart, timeEnd);

        let allReducedRows = [];

        for (let ueId of ueIds) {
            let filteredRows = rows.filter(row =>
                Array.isArray(row.ues) && row.ues.some(ue => ue.ueId == ueId)
            );

            if (filteredRows.length > 0) {
                let reducedRows = applyDataReduction(filteredRows, limit);
                allReducedRows = allReducedRows.concat(reducedRows);
            }
        }

        allReducedRows.sort((a, b) => a.timestamp - b.timestamp);

        logger.info('Telemetry data retrieved successfully', { timeStart, timeEnd, limit, ueIds });
        return allReducedRows;
    } catch (err) {
        logger.error('Error retrieving telemetry data:', err);
        throw new Error('Failed to retrieve telemetry data');
    }
}

/**
 * GET /api/ues?timeStart=_&timeEnd=_
 */
module.exports.getUEs = async function (timeStart = MIN_TIME, timeEnd = MAX_TIME) {
    if (isNaN(timeStart) || isNaN(timeEnd) || timeEnd < timeStart) {
        const errMsg = `Invalid time interval: timeStart=${timeStart}, timeEnd=${timeEnd}`;
        logger.error(errMsg);
        throw new Error(errMsg);
    }

    const SQL = `
        SELECT DISTINCT ueId FROM Ues
        WHERE ${timeStart} <= timestamp
        AND timestamp <= ${timeEnd}
    `;

    try {
        let rows = await connection.all(SQL)
            .then(rows => rows.map(row => row.ueId));

        logger.info('UEs retrieved successfully', { timeStart, timeEnd });
        return rows;
    } catch (err) {
        logger.error('Error retrieving UEs:', err);
        throw new Error('Failed to retrieve UEs');
    }
}

/**
 * GET /api/messages/latestTimestamp?topic=_
 * Returns the latest timestamp for a given topic.
 */
module.exports.getLatest = async function (topic) {
    if (!Object.values(this.topics).includes(topic)) {
        const errMsg = `Invalid topic: ${topic}`;
        logger.error(errMsg);
        throw new Error(errMsg);
    }

    const SQL = `
        SELECT payload FROM Messages
        WHERE destination LIKE '%${topic}'
        ORDER BY timestamp DESC
    `;

    try {
        let row = await connection.get(SQL)
            .then(_row => _row.payload)
            .then(JSON.parse);

        logger.info('Latest message retrieved successfully', { topic });
        return row;
    } catch (err) {
        logger.error('Error retrieving the latest message:', err);
        throw new Error('Failed to retrieve the latest message');
    }
}

/**
 * Get single data row by ID. Used for testing.
 */
module.exports.getByID = async function (rowID) {
    if (isNaN(rowID)) {
        const errMsg = `Invalid rowID: ${rowID}`;
        logger.error(errMsg);
        throw new Error(errMsg);
    }

    const SQL = `
        SELECT payload FROM Messages
        WHERE rowId = ${rowID}
    `;

    try {
        const row = await connection.get(SQL)
            .then(row => row.payload)
            .then(JSON.parse);

        logger.info('Message retrieved successfully by ID', { rowID });
        return row;
    } catch (err) {
        logger.error('Error retrieving message by ID:', err);
        throw new Error('Failed to retrieve message by ID');
    }
}

const db = require("../database/sqlite3")

module.exports.topics = {
    TELEMETRY: 'gnb.telemetry',
    HEALTH: 'cn5g.telemetry',
    LOGS: 'gnb.logs'
}

const MIN_TIME = 0
const MAX_TIME = Infinity
const LIMIT = 100

module.exports.init = async function () {
    await initMessages()
    await initUes()
}

async function initMessages() {
    return new Promise((resolve, reject) => {
        const CREATE = `
            CREATE TABLE IF NOT EXISTS Messages (
                rowId INTEGER PRIMARY KEY,
                timestamp BIGINT NOT NULL,
                destination TEXT NOT NULL,
                payload TEXT NOT NULL
            );`

        db.run(CREATE, [], function (err) {
            if (err)
                return reject(err)
            return resolve()
        })
    })
}

async function initUes() {
    return new Promise((resolve, reject) => {
        const createUes = `
            CREATE TABLE IF NOT EXISTS Ues (
                rowId INTEGER PRIMARY KEY,
                timestamp BIGINT NOT NULL,
                ueId TEXT NOT NULL
            );  
        `
        db.run(createUes, [], function (err) {
            if (err)
                return reject(err)
            return resolve()
        });
    });
}

module.exports.add = async function (timestamp, destination, payload) {
    // verify params
    try {
        JSON.parse(payload)
    } catch (e) {
        return reject('Invalid payload')
    }

    await addMessage(timestamp, destination, payload)

    const payloadObj = JSON.parse(payload)

    // maintain separate Ues table to improve performance of getUEs
    if (destination.endsWith('gnb.telemetry') && payloadObj.ues) {
        for (uesElement of payloadObj.ues) {
            await addUe(timestamp, uesElement.ueId)
        }
    }
}

async function addUe(timestamp, ueId) {
    return new Promise((resolve, reject) => {

        const insert = `
        INSERT INTO Ues (timestamp, ueId)
        VALUES ( ?, ? )`

        db.run(insert, [timestamp, ueId], function (err) {
            if (err) {
                return reject(err)
            }
            return resolve(this.lastID)
        })
    })
}

async function addMessage(timestamp, destination, payload) {
    return new Promise((resolve, reject) => {
        const INSERT = `
            INSERT INTO Messages (timestamp, destination, payload)
            VALUES ( ?, ?, ? )`

        // verify params
        try {
            JSON.parse(payload)
        } catch (e) {
            return reject('Invalid payload')
        }

        // payload = JSON.stringify(payload)

        db.run(INSERT, [timestamp, destination, payload], function (err) {
            if (err) {
                return reject(err)
            }
            return resolve(this.lastID)
        })
    })
}

/**
 * GET /api/messages?topic=_&timeStart=_&timeEnd=_
 */
module.exports.get = async function (topic, timeStart = MIN_TIME, timeEnd = MAX_TIME, limit = LIMIT) {
    return new Promise((resolve, reject) => {
        const QUERY = `
            SELECT payload FROM Messages
            WHERE destination LIKE ?
            AND ? <= timestamp
            AND timestamp <= ?
            ORDER BY timestamp
        `
        const query2 = `WITH NumberedMessages AS (
            SELECT 
                rowId, 
                timestamp, 
                destination, 
                payload,
                ROW_NUMBER() OVER (ORDER BY timestamp) AS row_num
            FROM Messages
            WHERE destination LIKE ? AND ? <= timestamp AND timestamp <= ?
        )
        SELECT 
            rowId, 
            timestamp, 
            destination, 
            payload
        FROM 
            NumberedMessages
        WHERE 
            (row_num - 1) % (SELECT CASE WHEN COUNT(*) > ? THEN COUNT(*) / ? ELSE 1 END FROM NumberedMessages) = 0
        ORDER BY 
            timestamp
        LIMIT ?`

        if (topic != this.topics.HEALTH
            && topic != this.topics.TELEMETRY
            && topic != this.topics.LOGS
        ) {
            return reject('Invalid topic')
        }

        if (isNaN(timeStart) || isNaN(timeEnd) || timeEnd < timeStart) {
            return reject('Invalid time interval')
        }

        db.all(query2, [`%${topic}`, timeStart, timeEnd, limit, limit, limit], (err, rows) => {
            if (err)
                return reject(err)
            return resolve(
                rows.map(row => row.payload)
                    .map(JSON.parse)
            )
        })
    })
}

module.exports.getTelemetry = async function (timeStart, timeEnd, limit, ueIds=[]) {
    // Abrufen aller Telemetriedatensätze innerhalb des angegebenen Zeitintervalls
    const rows = await this.get(this.topics.TELEMETRY, timeStart, timeEnd, limit);
    
    // Iteriere über jede Zeile und filtere das 'ues' Feld basierend auf 'ueIds'
    for (let row of rows) {
        if (Array.isArray(row.ues)) {
            // Filtert die UEs basierend auf dem ueIds Array
            row.ues = row.ues.filter(ue => ueIds.includes(ue.ueId));
        }
    }

    // Rückgabe der gefilterten Zeilen
    return rows;
}

// /**
//  * GET /api/ues?timeStart=_&timeEnd=_
//  */
// module.exports._getUEs = async function (timeStart, timeEnd) {

//     // fetch telemetry items
//     const data = await this.get(this.topics.TELEMETRY, timeStart, timeEnd)
//     const ueIds = new Set();

//     data.forEach(item => {
//         if (item.ues && Array.isArray(item.ues)) {
//             item.ues.forEach(ue => {
//                 if (ue.ueId !== undefined) {
//                     ueIds.add(ue.ueId);
//                 }
//             });
//         }
//     });

//     return Array.from(ueIds);
// }

/**
 * GET /api/ues?timeStart=_&timeEnd=_
 */
module.exports.getUEs = async function (timeStart = MIN_TIME, timeEnd = MAX_TIME) {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT DISTINCT ueId FROM Ues
            WHERE ? <= timestamp
            AND timestamp <= ?
        `

        // verify params
        if (isNaN(timeStart) || isNaN(timeEnd) || timeEnd < timeStart) {
            return reject('Invalid time interval')
        }

        db.all(query, [timeStart, timeEnd], (err, rows) => {
            if (err)
                return reject(err)
            return resolve(rows
                .map(row => row.ueId)
            )
        })
    })
}

/**
 * GET /api/messages/latestTimestamp?topic=_
 * Returns latest timestamp for a given topic
 */
module.exports.getLatestTimestamp = async function (topic) {
    return new Promise((resolve, reject) => {
        const query = `
        SELECT timestamp FROM Messages
        WHERE destination LIKE ?
        ORDER BY timestamp DESC`

        // validate parameters
        if (topic != this.topics.HEALTH
            && topic != this.topics.TELEMETRY
            && topic != this.topics.LOGS
        ) {
            return reject('Invalid topic')
        }

        db.get(query, [`%${topic}`], (err, row) => {
            if (err)
                return reject(err)
            return resolve(row)
        })
    })
}

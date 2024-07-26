const db = require("../database/sqlite3");
const queries = require('../sql/messages.sql');

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
        throw new Error('Invalid payload')
    }

    await addMessage(timestamp, destination, payload)

    const payloadObj = JSON.parse(payload)

    // maintain separate Ues table to improve performance of getUEs
    if (destination.endsWith('gnb.telemetry') && payloadObj.ues) {
        for (let uesElement of payloadObj.ues) {
            await addUe(timestamp, uesElement.ueId)
        }
    }
}

async function addUe(timestamp, ueId) {
    return new Promise((resolve, reject) => {
        db.run(queries.ADD_UE, [timestamp, ueId], function (err) {
            if (err) {
                return reject(err)
            }
            return resolve(this.lastID)
        })
    })
}

async function addMessage(timestamp, destination, payload) {
    return new Promise((resolve, reject) => {

        // verify params
        try {
            JSON.parse(payload)
        } catch (e) {
            return reject('Invalid payload')
        }

        // payload = JSON.stringify(payload)

        db.run(queries.ADD_MESSAGE, [timestamp, destination, payload], function (err) {
            if (err) {
                return reject(err)
            }
            return resolve(this.lastID)
        })
    })
}

function applyDataReduction(rows, limit) {
    if (rows.length <= limit) {
        return rows;
    }

    const step = Math.ceil(rows.length / limit);
    const reducedRows = [];

    for (let i = 0; i < rows.length; i += step) {
        reducedRows.push(rows[i]);
    }

    // Wenn die letzte Zeile nicht im reduzierten Ergebnis ist, fügen wir sie hinzu
    if (reducedRows[reducedRows.length - 1] !== rows[rows.length - 1]) {
        reducedRows.push(rows[rows.length - 1]);
    }

    return reducedRows;
}


/**
 * GET /api/messages?topic=_&timeStart=_&timeEnd=_
 */
module.exports.get = async function (topic, timeStart = MIN_TIME, timeEnd = MAX_TIME, limit = LIMIT) {
    return new Promise((resolve, reject) => {
        if (topic != this.topics.HEALTH
            && topic != this.topics.TELEMETRY
            && topic != this.topics.LOGS
        ) {
            return reject('Invalid topic')
        }
        if (isNaN(timeStart) || isNaN(timeEnd) || timeEnd < timeStart) {
            return reject('Invalid time interval')
        }

        db.all(queries.GET, [`%${topic}`, timeStart, timeEnd], (err, rows) => {
            console.log(queries.GET_WITH_REDUCTION)
            if (err)
                return reject(err)
            return resolve(
                applyDataReduction(
                    rows.map(row => row.payload)
                        .map(JSON.parse),
                    limit
                ))
        })
    })
}

module.exports.getTelemetry = async function (timeStart, timeEnd, limit, ueIds = []) {
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
        // verify params
        if (isNaN(timeStart) || isNaN(timeEnd) || timeEnd < timeStart) {
            return reject('Invalid time interval')
        }

        db.all(queries.GET_UES, [timeStart, timeEnd], (err, rows) => {
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

        // validate parameters
        if (topic != this.topics.HEALTH
            && topic != this.topics.TELEMETRY
            && topic != this.topics.LOGS
        ) {
            return reject('Invalid topic')
        }

        db.get(queries.GET_LATEST_TIMESTAMP, [`%${topic}`], (err, row) => {
            if (err)
                return reject(err)
            return resolve(row)
        })
    })
}

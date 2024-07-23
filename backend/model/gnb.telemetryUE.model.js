/**
/ Persistence API for managing gnb.telemetryUE data
*/

/* Import SQL strings */
const {
    INIT,
    SELECT,
    INSERT
} = require('../sql/gnb.telemetryUE.sql')

let db = require('../database/sqlite3');

module.exports.setDb = function(newDb) {
    db = newDb
}

/* Initialize database */
module.exports.init = async function() {
    return new Promise((resolve, reject) => {
        db.run(INIT, (err) => {
            if (err) reject(err)
            else resolve()
        })
    })
}

/* Add new entry */
module.exports.add = async function (data) {
    const {
        ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler,
        ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, gnbTelemetryRowId
    } = data

    return new Promise((resolve, reject) => {
        db.run(INSERT, [
            ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler,
            ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, gnbTelemetryRowId
        ], function (err) {
            if (err)
                reject(err)
            else
                resolve(this.lastID)
        })
    });
}

/* Get entry by ID */
module.exports.get = async function (id) {
    let query = SELECT + '\nWHERE rowId = ?'

    return new Promise((resolve, reject) => {
        db.get(query, [id], (err, row) => {
            if (err)
                reject(err)
            else
                resolve(row
                    ? JSON.parse(row.jsonData)
                    : row
                )
        })
    })
}

/* Get all matching entries */
module.exports.getAll = async function (params) {
    const { ueId, timeStart, timeEnd, telemetryId } = params
    let query = `
        ${SELECT}
        WHERE 1=1
    `

    let paramList = []

    if (ueId) {
        // Split ueId into an array of integers
        const ueIds = ueId.split(',').map(id => parseInt(id.trim(), 10)).filter(id => !isNaN(id));
    
        if (ueIds.length > 0) {
            // Generate placeholders for the query
            const placeholders = ueIds.map(() => '?').join(',');
            
            query += ` AND ueId IN (${placeholders})`;
            paramList.push(...ueIds);
        }
    }
    if (timeStart && timeEnd) {
        query += `
            AND ? <= timestamp 
            AND timestamp <= ?
        `
        paramList.push(timeStart, timeEnd)
    }
    if (telemetryId) {
        console.log('telemetryId', telemetryId)
        query += " AND gnbTelemetryRowId = ?"
        paramList.push(telemetryId)
    }

    return new Promise((resolve, reject) => {
        db.all(query, paramList, (err, rows) => {
            if (err) {
                reject(err)
            } else {
                resolve(rows)
            }
        })
    });
}

module.exports.delete = async function (id) {

}

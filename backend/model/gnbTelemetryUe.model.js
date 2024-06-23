// gnbTelemetryUe.model.js

const QUERY = `
SELECT rowId, ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler, ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr
FROM GnbTelemetryUe
`

const {
    INIT, 
    SELECT, 
    INSERT
} = require('../sql/gnb.telemetryUE.sql')

class GnbTelemetryUeModel {

    constructor() {
        this.db = require('../database/sqlite3')
        this.init()
    }

    setDb(db) {
        this.#db = db
    }

    /*
    / Initialize data model
    */
    async init() {
        return new Promise((resolve, reject) => {
            this.#db.run(INIT, (err) => {
                if (err) reject(err)
                else resolve()
            })
        })
    }

    /*
    * Get all matching entries
    * Params: ueId?, timeEnd?, timeEnd?
    * Returns a list of objects
    */
    async getAll(params) {
        let query = `
            SELECT GnbTelemetryUe.rowId, ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler, ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr
            FROM GnbTelemetryUe 
            JOIN GnbTelemetry
            ON GnbTelemetryUe.gnbTelemetryRowId = GnbTelemetry.rowId
            WHERE 1=1`
        const { ueId, timeStart, timeEnd, telemetryId } = params

        let paramList = []

        if (ueId) {
            query += " AND ueId = ?"
            paramList.push(ueId)
        }
        if (timeStart && timeEnd) {
            query += `
             AND ? <= timestamp 
            AND timestamp <= ?`
            paramList.push(timeStart, timeEnd)
        }
        if (telemetryId) {
            query += " AND gnbTelemetryRowId = ?"
            paramList.push(telemetryId)
        }

        return new Promise((resolve, reject) => {
            this.db.all(query, paramList, (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            })
        });
    }

    async get(id) {
        let query = `
            SELECT * FROM GnbTelemetryUe WHERE rowId = ?`

        return new Promise((resolve, reject) => {
            this.db.get(query, [id], (err, row) => {
                if (err) reject(err)
                else resolve(row)
            })
        })
    }

    async add(data) {
        console.log(data)
        const QUERY = `INSERT 
            INTO GnbTelemetryUe (
                ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler, 
                ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, gnbTelemetryRowId
            ) VALUES ( 
                ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? 
            );`
        const {
            ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler,
            ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, gnbTelemetryRowId
        } = data

        return new Promise((resolve, reject) => {
            this.db.run(QUERY, [
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

    async delete(id) {
        return new Promise((resolve, reject) => {
            resolve()
        })
    }
}

const INSTANCE = new GnbTelemetryUeModel()

module.exports = INSTANCE

// gnbTelemetryUe.model.js

module.exports = class GnbTelemetryUeModel {

    constructor(db) {
        this.db = db
        this.init()
    }

    /*
    / Initialize data model
    */
    init() {
        this.db.run(`
            CREATE TABLE IF NOT EXISTS 
                GnbTelemetryUe (
                    rowId INTEGER PRIMARY KEY,
                    gnbTelemetryRowId INT,
                    ueId INTEGER,
                    rnti TEXT,
                    inSync INTEGER,
                    dlBytes INTEGER,
                    dlMcs INTEGER,
                    dlBler REAL,
                    ulBytes INTEGER,
                    ulMcs INTEGER,
                    ulBler REAL,
                    ri INTEGER,
                    pmi TEXT,
                    phr INTEGER,
                    pcmax INTEGER,
                    rsrq REAL,
                    sinr REAL,
                    rsrp REAL,
                    rssi REAL,
                    cqi INTEGER,
                    pucchSnr REAL,
                    puschSnr REAL,
                    FOREIGN KEY (gnbTelemetryRowId) REFERENCES GnbTelementry(rowId)
                );`
        )
    }

    /*
    * Get all matching entries
    * Params: ueId?, timeEnd?, timeEnd?
    * Returns a list of objects
    */
    async getAll(params) {
        let query = `
            SELECT * FROM GnbTelemetryUe 
            JOIN GnbTelemetry
            ON GnbTelemetryUe.gnbTelemetryRowId = GnbTelemetry.rowId
            WHERE 1=1`
        const { ueId, timeStart, timeEnd } = params

        if (ueId) {
            query += " AND ueId = ?"
        }
        if (timeStart && timeEnd) {
            query += `
             AND ? <= GnbTelemetry.timestamp 
            AND GnbTelemetry.timestamp <= ?`
        }

        return new Promise((resolve, reject) => {
            this.db.all(query, [ueId, timeStart, timeEnd], (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            })
        });
    }

    async get(id) {
        const QUERY = `
            SELECT * FROM GnbTelemetryUe WHERE rowId = ?`

        return new Promise((resolve, reject) => {
            this.db.get(QUERY, [id], (err, row) => {
                if (err) reject(err)
                else resolve(row)
            })
        })
    }

    async add(data) {
        const QUERY = `INSERT 
            INTO GnbTelemetryUe (
                ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler, 
                ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, timestamp
            ) VALUES ( 
                ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? 
            );`
        const {
            ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler,
            ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, timestamp
        } = data

        return new Promise((resolve, _) => {
            this.db.run(QUERY, [
                ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler,
                ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, timestamp
            ], function () {
                resolve(this.lastID)
            })
        });
    }
}

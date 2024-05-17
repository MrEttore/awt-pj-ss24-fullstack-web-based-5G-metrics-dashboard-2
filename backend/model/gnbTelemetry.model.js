
module.exports = class GnbTelemetryModel {

    constructor(db) {
        this.db = db
        this.init();
    }

    init() {
        this.db.run(`
            CREATE TABLE IF NOT EXISTS
                GnbTelemetry (
                    rowId INTEGER PRIMARY KEY,
                    id INTEGER,
                    frame INTEGER,
                    slot INTEGER,
                    pci INTEGER,
                    dlCarrierFreq INTEGER,
                    ulCarrierFreq INTEGER,
                    avgLdpcIterations INTEGER,
                    timestamp BIGINT
                )`
        );
        this.db.run(`
            CREATE TABLE IF NOT EXISTS
                GnbTelemetryUe (
                    rowId INTEGER PRIMARY KEY,
                    gnbTelemetryRowId INT
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
                )`
        );
    }

    /*
    /   Wenn uid nicht angegeben ist, wird uid auf 1 gesetzt
    /   es werden alle datensätze zurückgegeben
    */
    async get(params) {
        const { timeStart, timeEnd } = params
        let query = `
            SELECT * FROM GnbTelemetry WHERE 1=1 `

        if (timeStart && timeEnd) {
            query += "AND ? <= timestamp AND timestamp <= ?"
        }
        return new Promise((resolve, reject) => {
            this.db.all(query, [timeStart, timeEnd], (err, rows) => {
                if (err) reject(err)
                else resolve(rows)
            })
        })

    }

    async getByID(id) {
        const QUERY = ""

        return new Promise((resolve, reject) => {
            resolve()
        })
    }

    async getUE(params) {
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

    async getUeByID(id) {
        const QUERY = `
            SELECT * FROM GnbTelemetryUe WHERE rowId = ?`

        return new Promise((resolve, reject) => {
            this.db.get(QUERY, [id], (err, row) => {
                if (err) reject(err)
                else resolve(row)
            })
        })
    }

    async get_(params) {
        const QUERY = `
            SELECT * FROM GnbTelemetry`
        return new Promise((resolve, reject) => {
            this.db.all(QUERY, [], (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            });
        });
    }


    // TODO: Add transaction. Rollback on error
    async add_(data) {
        let ues = data.ues

        let rowID = await this.insertGnbTelemetry(data)

        for (ue in ues) {
            await this.insertGnbTelemetryUe({ ...ue, 'gnbTelemetryRowId': rowID })
        }
    }

    async add(data) {
        const QUERY = `INSERT
            INTO GnbTelemetry (
                id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations, timestamp
            ) VALUES (
                ?, ?, ?, ?, ?, ?, ?, ?
            );`
        const {
            id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations, timestamp
         } = data
        return new Promise((resolve, _) => {
            this.db.run(QUERY, [
                id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations, timestamp
            ], function (err) {
                if (err) reject(err)
                else resolve(this.lastID)
            })
        });
    }

    async addUE(data) {
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

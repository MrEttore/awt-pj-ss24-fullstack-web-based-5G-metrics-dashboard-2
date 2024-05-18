
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
    }

    /*
    /   Wenn uid nicht angegeben ist, wird uid auf 1 gesetzt
    /   es werden alle datensätze zurückgegeben
    */
    async getAll(params) {
        const { timeStart, timeEnd } = params
        let query = `
            SELECT * FROM GnbTelemetry WHERE 1=1`

        if (timeStart && timeEnd) {
            query += " AND ? <= timestamp AND timestamp <= ?"
        }
        return new Promise((resolve, reject) => {
            this.db.all(query, [timeStart, timeEnd], (err, rows) => {
                if (err) reject(err)
                else resolve(rows)
            })
        })

    }

    async get(id) {
        const QUERY = ""

        return new Promise((resolve, reject) => {
            resolve()
        })
    }

    async delete(id) {
        const QUERY = `
            `
        return new Promise((resolve, reject) => {
            resolve()
        })
    }

    // async getUE(params) {
    //     let query = `
    //         SELECT * FROM GnbTelemetryUe 
    //         JOIN GnbTelemetry
    //         ON GnbTelemetryUe.gnbTelemetryRowId = GnbTelemetry.rowId
    //         WHERE 1=1`
    //     const { ueId, timeStart, timeEnd } = params

    //     if (ueId) {
    //         query += " AND ueId = ?"
    //     }
    //     if (timeStart && timeEnd) {
    //         query += `
    //              AND ? <= GnbTelemetry.timestamp 
    //             AND GnbTelemetry.timestamp <= ?`
    //     }

    //     return new Promise((resolve, reject) => {
    //         this.db.all(query, [ueId, timeStart, timeEnd], (err, rows) => {
    //             if (err) {
    //                 reject(err)
    //             } else {
    //                 resolve(rows)
    //             }
    //         })
    //     });
    // }

    // async getUeByID(id) {
    //     const QUERY = `
    //         SELECT * FROM GnbTelemetryUe WHERE rowId = ?`

    //     return new Promise((resolve, reject) => {
    //         this.db.get(QUERY, [id], (err, row) => {
    //             if (err) reject(err)
    //             else resolve(row)
    //         })
    //     })
    // }


    // // TODO: Add transaction. Rollback on error
    // async add_(data) {
    //     let ues = data.ues

    //     let rowID = await this.insertGnbTelemetry(data)

    //     for (ue in ues) {
    //         await this.insertGnbTelemetryUe({ ...ue, 'gnbTelemetryRowId': rowID })
    //     }
    // }

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


    // async addUE(data) {
    //     const QUERY = `INSERT 
    //         INTO GnbTelemetryUe (
    //             ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler, 
    //             ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, timestamp
    //         ) VALUES ( 
    //             ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? 
    //         );`
    //     const {
    //         ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler,
    //         ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, timestamp
    //     } = data

    //     return new Promise((resolve, _) => {
    //         this.db.run(QUERY, [
    //             ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler,
    //             ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, timestamp
    //         ], function () {
    //             resolve(this.lastID)
    //         })
    //     });
    // }

}

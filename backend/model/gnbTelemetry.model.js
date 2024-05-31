
const ueModel = require("./gnbTelemetryUe.model")

const SELECT = `
    SELECT *
    FROM GnbTelemetry`

const INSERT = `INSERT
INTO GnbTelemetry (
    id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations, timestamp
) VALUES (
    ?, ?, ?, ?, ?, ?, ?, ?
);`

const GNB_TELEMETRY_ROW_ID = 'gnbTelemetryRowId'

class GnbTelemetryModel {

    constructor() {
        this.db = require('../database/sqlite3');
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
        const { ueId, timeStart, timeEnd } = params
        let query = `
            ${SELECT}
            WHERE 1=1
        `

        let paramList = []

        if (ueId) {
            query += "\nAND ueId = ?"
            paramList.push(ueId)
        }

        if (timeStart && timeEnd) {
            query += "\nAND ? <= timestamp AND timestamp <= ?"
            paramList.push(timeStart, timeEnd)
        }
        return new Promise((resolve, reject) => {
            this.db.all(query, paramList, (err, rows) => {
                if (err) 
                    reject(err)
                else 
                    resolve(rows)
            })
        })

    }

    async get(id) {
        let query = `
            ${SELECT}
            WHERE GnbTelemetry.rowId = ?
        `

        return new Promise((resolve, reject) => {
            this.db.get(query, [id], (err, row) => {
                if (err) reject(err)
                else {
                    console.log(row)
                    resolve(row)
                }
            });
        });
    }

    async delete(id) {
        const QUERY = `
            DELETE FROM GnbTelemetry
            WHERE rowId = ?`
        return new Promise((resolve, reject) => {
            this.db.run(QUERY, [id], (err) => {
                if (err) reject(err)
                else resolve()
            })
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

    /*
    *   Adds telemetry data to table
    *   Returns 
    */
    async addAll(data) {
        console.log(data)

        const lastID = await this.add(data);

        for (let ueData in data.ues) {
            await ueModel.add({...ueData, 
                                [GNB_TELEMETRY_ROW_ID]: lastID
                            })
        }
        return lastID;
    }

    async add(data) {
        const {
            id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations, timestamp
        } = data

        return new Promise((resolve, reject) => {
            this.db.run(INSERT, [
                id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations, timestamp
            ], function(err) {
                if (err)
                    reject(err)
                else
                    resolve(this.lastID)
            })
        })
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

const INSTANCE = new GnbTelemetryModel();

module.exports = INSTANCE

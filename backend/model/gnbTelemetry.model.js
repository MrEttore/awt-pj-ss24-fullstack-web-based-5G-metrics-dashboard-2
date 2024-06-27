
const {
    INIT,
    INSERT,
    SELECT
} = require('../sql/gnb.telemetry.sql');

const GNB_TELEMETRY_ROW_ID = 'gnbTelemetryRowId'

/** Persistence API for gnb.telemetry data */
class GnbTelemetryModel {

    #db;
    #ueModel;

    constructor() {
        this.#db = require('../database/sqlite3');
        this.#ueModel = require('./gnb.telemetryUE.model');
    }

    setDb(db) {
        this.#ueModel.setDb(db)
        this.#db = db;
    }

    async init() {
        await this.#ueModel.init();

        return new Promise((resolve, reject) => {
            this.#db.run(INIT, (err) => {
                if (err) reject(err)
                else resolve()
            })
        })
    }

    #extractUeIds(data) {
        const ueIds = new Set(); // Verwenden Sie ein Set, um Duplikate zu vermeiden
    
        data.forEach(record => {
            if (record.ues && Array.isArray(record.ues)) {
                record.ues.forEach(ue => {
                    ueIds.add(ue.ueId);
                });
            }
        });
    
        return Array.from(ueIds); // Konvertieren Sie das Set zurück in ein Array
    }

    async getAll(params) {
        const rows = await this.#getAll(params);

        for (let row of rows) {
            row.ues = await this.#ueModel.getAll({
                ...params,
                'telemetryId': row.rowId
            })
        }
        // for (let id of ids) {
        //     const row = await this.#get(id)
        //     rows.push(row)
        // }

        if ('ues' in params) {
            return this.#extractUeIds(rows)
        }
        return rows
    }

    /*
    /   Wenn uid nicht angegeben ist, wird uid auf 1 gesetzt
    /   es werden alle datensätze zurückgegeben
    */
    async #getAll(params) {
        const { ueId, timeStart, timeEnd } = params
        let query = `
            ${SELECT}
            WHERE 1=1
        `

        let paramList = []

        if (timeStart && timeEnd) {
            query += "\nAND ? <= timestamp AND timestamp <= ?"
            paramList.push(timeStart, timeEnd)
        }
        return new Promise((resolve, reject) => {
            this.#db.all(query, paramList, (err, rows) => {
                if (err)
                    reject(err)
                else
                    resolve(rows)
            })
        })

    }

    async get(id) {
        const row = await this.#get(id)

        row.ues = await this.#ueModel.getAll({
            telemetryId: id
        })

        return row;
    }

    async #get(id) {
        let query = `
            ${SELECT}
            WHERE rowId = ?
        `

        return new Promise((resolve, reject) => {
            this.#db.get(query, [id], (err, row) => {
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
            this.#db.run(QUERY, [id], (err) => {
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
    //         this.#db.all(query, [ueId, timeStart, timeEnd], (err, rows) => {
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
    //         this.#db.get(QUERY, [id], (err, row) => {
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
            await this.#ueModel.add({
                ...ueData,
                [GNB_TELEMETRY_ROW_ID]: lastID
            })
        }
        return lastID;
    }

    async add(data) {
        const {
            id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations, timestamp, ues
        } = data

        const ID = await this.#add({
            id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations, timestamp
        })

        for (let ue of ues) {
            await this.#ueModel.add({
                ...ue,
                [GNB_TELEMETRY_ROW_ID]: ID
            })
        }
        return ID;
    }

    async #add(data) {
        const {
            id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations, timestamp
        } = data

        return new Promise((resolve, reject) => {
            this.#db.run(INSERT, [
                id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations, timestamp
            ], function (err) {
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
    //         this.#db.run(QUERY, [
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

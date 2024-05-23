
const CREATE_TABLE = `
    CREATE TABLE IF NOT EXISTS 
        GnbConfiguration (
            rowId INTEGER PRIMARY KEY AUTOINCREMENT,
            gnbId TEXT NOT NULL,
            nrCellId INTEGER NOT NULL,
            band INTEGER NOT NULL,
            ssbArfcn INTEGER NOT NULL,
            pointaArcfn INTEGER NOT NULL,
            bandwidth INTEGER NOT NULL,
            branch TEXT NOT NULL,
            dlModulationOrder TEXT NOT NULL,
            pcapEnabled BOOLEAN NOT NULL,
            ulModulationOrder TEXT NOT NULL,
            t2LdpcOffload BOOLEAN NOT NULL,
            tddConfiguration TEXT NOT NULL,
            timestamp BIGINT NOT NULL,
            logicalAntRx INTEGER NOT NULL,
            logicalAntTx INTEGER NOT NULL,
            physicalAntRx INTEGER NOT NULL,
            physicalAntTx INTEGER NOT NULL,
            attTx INTEGER NOT NULL,
            attRx INTEGER NOT NULL,
            duplexMode TEXT NOT NULL
        );`

const SELECT = `
    SELECT json_object(
        'gnbId', gnbId,
        'nrCellId', nrCellId,
        'bandConfiguration', json_object(
            'band', band,
            'ssbArfcn', ssbArfcn,
            'pointaArfcn', pointaArcfn
        ),
        'bandwidth', bandwidth,
        'branch', branch,
        'dlModulationOrder', dlModulationOrder,
        'pcapEnabled', pcapEnabled,
        'ulModulationOrder', ulModulationOrder,
        't2LdpcOffload', t2LdpcOffload,
        'tddConfiguration', tddConfiguration,
        'timestamp', timestamp,
        'logicalAntRx', logicalAntRx,
        'logicalAntTx', logicalAntTx,
        'physicalAntRx', physicalAntRx,
        'physicalAntTx', physicalAntTx,
        'attTx', attTx,
        'attRx', attRx,
        'duplexMode', duplexMode
    ) AS jsonData
    FROM GnbConfiguration;`

const INSERT = `
    INSERT INTO 
        GnbConfiguration (
            rowId, 
            nbId, 
            nrCellId, 
            bandConfiguration, 
            bandwidth, 
            branch, 
            dlModulationOrder, 
            pcapEnabled, 
            ulModulationOrder, 
            t2LdpcOffload, 
            tddConfiguration, 
            timestamp, 
            logicalAntRx, 
            logicalAntTx, 
            physicalAntRx, 
            physicalAntTx, 
            attTx, 
            attRx, 
            duplexMode
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )`

// const BAND_CONFIGURATION = 'bandConfiguration'

class GnbConfigurationModel {

    #db;

    constructor() {
        this.#db = require('../database/sqlite3');
        this.#init()
    }

    #init() {
        this.#db.run(CREATE_TABLE)
    }

    // add(data) {
    //     const {
    //         nbId, nrCellId, bandConfiguration,
    //         bandwidth, branch, dlModulationOrder, pcapEnabled, ulModulationOrder,
    //         t2LdpcOffload, tddConfiguration, timestamp, logicalAntRx, logicalAntTx,
    //         physicalAntRx, physicalAntTx, attTx, attRx, duplexMode } = data

    //     const { band, ssbArfcn, pointaArcfn } = bandConfiguration

    //     return new Promise((resolve, reject) => {
    //         this.#db.run(INSERT, [nbId, nrCellId, bandConfiguration,
    //             bandwidth, branch, dlModulationOrder, pcapEnabled, ulModulationOrder,
    //             t2LdpcOffload, tddConfiguration, timestamp, logicalAntRx, logicalAntTx,
    //             physicalAntRx, physicalAntTx, attTx, attRx, duplexMode
    //         ], function (err) {
    //             if (err) reject(err)
    //             else resolve(this.lastID);
    //         })
    //     })
    // }

    getAll(params) {
        return new Promise((resolve, reject) => {
            this.#db.all(SELECT, (err, rows) => {
                if (err) reject(err)
                else {
                    resolve(rows)
                }
            })
        })
    }

    get(id) {
        const QUERY = `
            ${SELECT}
            WHERE rowId = ?`
        return new Promise((resolve, reject) => {
            this.#db.get(QUERY, [id], (err, row) => {
                if (err) reject(err)
                else resolve(row)
            })
        })
    }

}

const INSTANCE = new GnbConfigurationModel()
module.exports = INSTANCE;

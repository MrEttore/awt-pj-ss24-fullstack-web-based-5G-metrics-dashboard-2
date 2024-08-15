
const {
    INIT,
    SELECT,
    INSERT
} = require('../sql/cn5g.telemetry.sql')


/*
*   Persistence API for managing cn5g.telemetry data
*/
class Cn5gTelemetryModel {

    #db;

    constructor(db = require('../database/sqlite3')) {
        this.#db = db;
        if (process.env.NODE_ENV != 'test')
            this.init()
    }

    setDb(db) {
        this.#db = db;
        return this;
    }

    /*
    *   Initialize database
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
    *   Get entry by ID
    *   Param: id
    *   Returns row in JSON format or undefined
    */
    async get(id) {
        const QUERY = `
            ${SELECT}
            WHERE rowId = ?`

        return new Promise((resolve, reject) => {
            this.#db.get(QUERY, [id], (err, row) => {
                if (err)
                    reject(err)
                else
                    resolve(row ? JSON.parse(
                        row.jsonData
                    ) : row
                    )
            })
        })
    }

    /*
    *   Get all matching entries
    *   Params: timeStart, timeEnd
    */
    async getAll(params) {
        let query = SELECT
        const {
            timeStart,
            timeEnd,
        } = params

        let paramList = []
        if (timeStart && timeEnd && !isNaN(parseInt(timeStart)) && !isNaN(parseInt(timeEnd))) {
            console.log("Params provided.")
            query += ' WHERE ? <= timestamp AND timestamp <= ?'
            paramList.push(timeStart, timeEnd)
        }

        return new Promise((resolve, reject) => {
            this.#db.all(query, paramList, (err, rows) => {
                if (err)
                    reject(err)
                else
                    resolve(rows
                        .map(row => row.jsonData)
                        .map(JSON.parse)
                    )
            })
        })

    }

    /*
    *   Insert new entry
    *   Returns ID of new entry
    */
    async add(data) {
        const {
            timestamp,
            amf: { status: amfStatus, message: amfMessage },
            ausf: { status: ausfStatus, message: ausfMessage },
            nrf: { status: nrfStatus, message: nrfMessage },
            smf: { status: smfStatus, message: smfMessage },
            upf: { status: upfStatus, message: upfMessage },
            udm: { status: udmStatus, message: udmMessage },
            udr: { status: udrStatus, message: udrMessage },
            nssf: { status: nssfStatus, message: nssfMessage },
            nef: { status: nefStatus, message: nefMessage },
            mysql: { status: mysqlStatus, message: mysqlMessage },
            extdn: { status: extdnStatus, message: extdnMessage },
            asterisk: { status: asteriskStatus, message: asteriskMessage },
            openspeedtest: { status: openspeedtestStatus, message: openspeedtestMessage },
            oaiExtDnUplinkState,
            oaiExtDnDownlinkInstances
        } = data;

        return new Promise((resolve, reject) => {
            this.#db.run(INSERT, [
                timestamp,
                amfStatus, amfMessage,
                ausfStatus, ausfMessage,
                nrfStatus, nrfMessage,
                smfStatus, smfMessage,
                upfStatus, upfMessage,
                udmStatus, udmMessage,
                udrStatus, udrMessage,
                nssfStatus, nssfMessage,
                nefStatus, nefMessage,
                mysqlStatus, mysqlMessage,
                extdnStatus, extdnMessage,
                asteriskStatus, asteriskMessage,
                openspeedtestStatus, openspeedtestMessage,
                oaiExtDnUplinkState, oaiExtDnDownlinkInstances
            ], function (err) {
                if (err)
                    reject(err)
                else
                    resolve(this.lastID)
            })
        })

    }

    async delete(id) {
        // Implement delete logic if needed
    }

}

const INSTANCE = new Cn5gTelemetryModel();
module.exports = INSTANCE;

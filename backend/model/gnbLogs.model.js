const { INIT } = require('../sql/gnbLogs.sql')

class GnbLogsModel {

    #db;

    constructor(db) {
        this.#db = db;
        if (process.env.NODE_ENV != 'test')
            this.init();
    }

    setDb(db) {
        this.#db = db;
    }

    async init() {
        return new Promise((resolve, reject) => {
            this.#db.run(INIT, (err) => {
                if (err) reject(err)
                else resolve()
            })
        })
    }

    async getAll(params) {
        const { timeStart, timeEnd } = params
        let query = `
            SELECT * FROM GnbLogs
            WHERE 1=1`
        if (timeStart && timeEnd) {
            query += ` AND ? <= timestamp 
                 AND timestamp <= ?`
        }
        return new Promise((resolve, reject) => {
            this.#db.all(query, paramList, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    let results = rows.map(row => row.jsonData).map(JSON.parse);
                    if (results.length > 100) {
                        const step = Math.ceil(results.length / 100);
                        results = results.filter((_, index) => index % step === 0);
                    }
                    resolve(results);
                }
            });
        });
    }

    async get(id) {
        const QUERY = `
            SELECT *
            FROM GnbLogs
            WHERE rowId = ?`
        
        return new Promise((resolve, reject) => {
            this.#db.get(QUERY, [id], (err, row) => {
                if (err) reject(err)
                else resolve(row)
            })
        })
    }

    async add(data) {
        const QUERY = 'INSERT INTO GnbLogs (payload, timestamp) VALUES (?, ?)'
        let { payload, timestamp } = data
        return new Promise((resolve, reject) => {
            this.#db.run(QUERY, [payload, timestamp], function(err) {
                if (err) reject(err)
                else resolve(this.lastID)
            });
        });
    }
}

/*
* Implement singleton pattern.
*/
let INSTANCE; 

function getInstance(db = require('../database/sqlite3')) {
    if (!INSTANCE) {
        INSTANCE = new GnbLogsModel(db)
    }
    console.log(INSTANCE)
    return INSTANCE
}

module.exports = getInstance();

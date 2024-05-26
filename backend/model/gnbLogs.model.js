
class GnbLogsModel {

    #db;

    constructor() {
        this.#db = require('../database/sqlite3');
        this.#init();
    }

    #init() {
        this.#db.run(`
            CREATE TABLE IF NOT EXISTS 
                GnbLogs (
                    rowId INTEGER PRIMARY KEY,
                    timestamp BIGINT,
                    payload TEXT
                );
        `)
    }

    getAll(params) {
        const { timeStart, timeEnd } = params
        let query = `
            SELECT * FROM GnbLogs
            WHERE 1=1`
        if (timeStart && timeEnd) {
            query += ` AND ? <= timestamp 
                 AND timestamp <= ?`
        }
        return new Promise((resolve, reject) => {
            this.#db.all(query, [timeStart, timeEnd], (err, rows) => {
                if (err) reject(err)
                else resolve(rows)
            });
        });
    }

    get(id) {
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

    add(data) {
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
const INSTANCE = new GnbLogsModel()

function getInstance() {
    if (!INSTANCE) {
        INSTANCE = new GnbLogsModel()
    }
    return INSTANCE
}

module.exports = getInstance();

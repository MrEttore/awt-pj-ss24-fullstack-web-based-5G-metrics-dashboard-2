
class GnbLogsModel {

    constructor() {
        this.db = require('../database/sqlite3');
        this.init();
    }

    init() {
        this.db.run(`
            CREATE TABLE IF NOT EXISTS 
                GnbLogs (
                    rowId INTEGER PRIMARY KEY,
                    timestamp BIGINT,
                    payload TEXT
                );
        `)
    }

    getAll(params, callback) {
        const QUERY = 'SELECT * FROM GnbLogs'
        this.db.all(QUERY, callback);
    }

    add(data, callback) {
        const QUERY = 'INSERT INTO GnbLogs (payload, timestamp) VALUES (?, ?)'
        let { payload, timestamp } = data
        this.db.run(QUERY, [payload, timestamp], callback)
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

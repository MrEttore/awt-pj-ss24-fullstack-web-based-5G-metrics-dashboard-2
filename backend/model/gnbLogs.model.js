
class GnbLogsModel {

    constructor(db) {
        this.db = db
    }

    getGnbLogs(params, callback) {
        const QUERY = 'SELECT * FROM GnbLogs'
        this.db.all(QUERY, callback);
    }

    addGnbLogs(data, callback) {
        const QUERY = 'INSERT INTO GnbLogs (payload, timestamp) VALUES (?, ?)'
        let { payload, timestamp } = data
        this.db.run(QUERY, [payload, timestamp], callback)
    }
}
/*
/ Persistence API for managing gnb.configuration data
*/

/* Import SQL strings */
const {
    INIT,
    SELECT,
    INSERT
} = require('../sql/gnb.configuration.sql')

const db = require('../database/sqlite3');

/* Initialize database */
db.run(INIT);

/* Add new entry */
module.exports.add = async function (data) {
    const {

    } = data

    return new Promise((resolve, reject) => {
        db.run(INSERT, [

        ], function (err) {
            if (err)
                reject(err)
            else
                resolve(this.lastID)
        })
    })
}

/* Get entry by ID */
module.exports.get = async function (id) {
    let query = SELECT + '\nWHERE rowId = ?'

    return new Promise((resolve, reject) => {
        db.get(query, [id], (err, row) => {
            if (err)
                reject(err)
            else
                resolve(row
                    ? JSON.parse(row.jsonData)
                    : row
                )
        })
    })
}

/* Get all matching entries */
module.exports.getAll = async function (params) {
    let query = SELECT + '\nWHERE 1=1'
    const {
        timeStart,
        timeEnd
    } = params

    if (timeStart && timeEnd && !isNaN(parseInt(timeStart)) && !isNaN(parseInt(timeEnd))) {
        query += '\n AND ? <= timestamp AND timestamp <= ?'
    }

    return new Promise((resolve, reject) => {
        db.all(query, [timeStart, timeEnd], (err, rows) => {
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

module.exports.delete = async function (id) {

}

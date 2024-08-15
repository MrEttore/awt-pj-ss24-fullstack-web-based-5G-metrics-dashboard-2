// sqlite3.js

const sqlite3 = require('sqlite3');

// global database object
let connection;

/**
 * public member returns database access methods
 * logical singleton implementation
 * database file can be specified in the DB_PATH environment variable
 * 1. creates new database connection to DB_PATH
 * 2. initializes global connection variable
 */
module.exports.getConnection = async function() {
    if (!connection || !connection instanceof sqlite3.Database) {
        // relative to working directory
        const DB_PATH = process.env.DB_PATH
        connection = await init(DB_PATH);
    }
    return {
        all, get, run
    }
}

/**
 * public member to delete existing database connection
 * 1. closes the database connection if connection exists
 * 2. deinitializes global connection variable
 */
module.exports.deleteConnection = async function() {
    if (connection && connection instanceof sqlite3.Database) {
        await close();
    }
    connection = null;
}

/**
 * database factory
 * resolves with new database object if successful
 */
async function init(dbPath) {
    return new Promise((resolve, reject) => {
         const dbObj = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                console.error('Error connecting to database:', err.message);
                return reject(err)
            }
            return resolve(dbObj);
        })
    })
}

/**
 * async wrapper for sqlite3.Database.all
 */
async function all(sql, params) {
    return new Promise((resolve, reject) => {
        connection.all(sql, params, (err, rows) => {
            if (err)
                return reject(err)
            return resolve(rows)
        })
    })
}

/**
 * async wrapper for sqlite3.Database.run
 */
async function run(sql, params) {
    return new Promise((resolve, reject) => {
        connection.run(sql, params, function(err) {
            if (err) {
                console.error(err)
                return reject(err)
            }
            return resolve(this.lastID)
        })
    })
}

/**
 * async wrapper for sqlite3.Database.get
 */
async function get(sql, params) {
    return new Promise((resolve, reject) => {
        connection.get(sql, params, (err, row) => {
            if (err) {
                console.error(err)
                return reject(err)
            }
            return resolve(row)
        })
    })
}

async function close() {
    return new Promise((resolve, reject) => {
        connection.close((err) => {
            if (err) {
                return reject(err)
            }
            return resolve()
        })
    })
}

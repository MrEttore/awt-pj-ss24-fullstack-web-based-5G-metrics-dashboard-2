// sqlite3.js

const sqlite3 = require('sqlite3');

// relative to working directory
const DB_PATH = 'test.db'
let db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

module.exports = db;

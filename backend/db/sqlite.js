const sqlite3 = require('sqlite3').verbose();

// Pfad zur SQLite-Datenbankdatei
const DB_PATH = '../database.db';

// Verbindung zur SQLite-Datenbank herstellen und exportieren
const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error('Fehler beim Öffnen der SQLite-Datenbank:', err.message);
    } else {
        console.log('Verbunden mit der SQLite-Datenbank');
    }
});

module.exports = db;

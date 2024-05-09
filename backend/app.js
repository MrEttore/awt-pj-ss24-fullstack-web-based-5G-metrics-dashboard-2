const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3000;

// Verbindung zur SQLite-Datenbank herstellen
const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the database.');
    }
});

// db.serialize(() => {
//     db.run(`CREATE TABLE IF NOT EXISTS BaseStation (
//         id INTEGER PRIMARY KEY,
//         frame INTEGER,
//         slot INTEGER,
//         pci INTEGER,
//         dlCarrierFreq INTEGER,
//         ulCarrierFreq INTEGER,
//         avgLdpcIterations INTEGER,
//         timestamp INTEGER
//     );`
//     )
    
//     db.run(`CREATE TABLE IF NOT EXISTS UE (
//         id INTEGER PRIMARY KEY,
//         baseStationId INTEGER,
//         ueId TEXT,
//         rnti TEXT,
//         inSync INTEGER,
//         dlBytes INTEGER,
//         dlMcs INTEGER,
//         dlBler REAL,
//         ulBytes INTEGER,
//         ulMcs INTEGER,
//         ulBler REAL,
//         ri INTEGER,
//         pmi TEXT,
//         phr INTEGER,
//         pcmax INTEGER,
//         rsrq REAL,
//         sinr REAL,
//         rsrp REAL,
//         rssi REAL,
//         cqi INTEGER,
//         pucchSnr REAL,
//         puschSnr REAL,
//         timestamp INTEGER,
//         FOREIGN KEY (baseStationId) REFERENCES BaseStation(id)
//     );`
//     )
// })

// Routen für den Datenzugriff definieren
app.get('/baseStations', (req, res) => {
    db.all('SELECT * FROM BaseStation', (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(rows);
        }
    });
});

app.get('/ue', (req, res) => {
    db.all('SELECT * FROM UE', (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(rows);
        }
    });
});

// Server starten
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

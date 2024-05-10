// metricsModel.js
const sqlite3 = require('sqlite3').verbose();

class MetricsModel {
    constructor(dbFilePath) {
        this.db = new sqlite3.Database(dbFilePath, (err) => {
            if (err) {
                console.error('Error when connecting to SQLite-database:', err.message);
            } else {
                console.log('Connected to SQLite-database');
            }
        });
    }

    createTables(callback) {
        const createTableQuery = `
      CREATE TABLE IF NOT EXISTS Metrics (
        rowId INTEGER PRIMARY KEY,
        id INTEGER,
        frame INTEGER,
        slot INTEGER,
        pci INTEGER,
        dlCarrierFreq INTEGER,
        ulCarrierFreq INTEGER,
        avgLdpcIterations INTEGER,
        ueId TEXT,
        rnti TEXT,
        inSync INTEGER,
        dlBytes INTEGER,
        dlMcs INTEGER,
        dlBler REAL,
        ulBytes INTEGER,
        ulMcs INTEGER,
        ulBler REAL,
        ri INTEGER,
        pmi TEXT,
        phr INTEGER,
        pcmax INTEGER,
        rsrq REAL,
        sinr REAL,
        rsrp REAL,
        rssi REAL,
        cqi INTEGER,
        pucchSnr REAL,
        puschSnr REAL,
        timestamp BIGINT
      );
    `;
        this.db.run(createTableQuery, callback);
    }

    getAllMetrics(callback) {
        const query = 'SELECT * FROM Metrics';
        this.db.all(query, callback);
    }

    addMetric(metricData, callback) {
        const {
            id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations,
            ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler,
            ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, timestamp
        } = metricData;
        const query = `
      INSERT INTO Metrics (
        id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations,
        ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler,
        ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, timestamp
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
        this.db.run(query, [
            id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations,
            ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler,
            ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, timestamp
        ], callback);
    }

    getMetricsByTimeInterval(startTime, endTime, callback) {
        const query = 'SELECT * FROM Metrics WHERE timestamp >= ? AND timestamp <= ?';
        this.db.all(query, [startTime, endTime], callback);
    }

    getAllMetricForUE(callback) {
        const query = 'SELECT * FROM UE'
        this.db.all(query, callback)
    }

    getAllMetricsForUEByTimeInterval(ueId, startTime, endTime, callback) {
        const query = 'SELECT * FROM UE WHERE ueId == ? AND timestamp >= ? AND timestamp <= ?';
        this.db.all(query, [ueId, startTime, endTime], callback);
    }

    addMetricsForUE(metricData, callback) {
        const {
            ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler,
            ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, timestamp
        } = metricData
        const query = `
        INSERT INTO Metrics (
         ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler, 
            ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, timestamp
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `
        this.db.run(query, [
            ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler,
            ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, timestamp
        ], callback)
    }

    getAllMetricsForBaseStation(callback) {
        const query = 'SELECT * FROM BaseStation SORT BY timestamp'
        this.db.all(query, callback)
    }

    getMetricsForBaseStationByInterval(startTime, endTime, callback) {
        const query = 'SELECT * FROM BaseStation WHERE timestamp >= ? AND timestamp <= ?'
        this.db.all(query, [startTime, endTime], callback)
    }

    addMetricsForBaseStation(metricData, callback) {
        const {
            id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations, timestamp
        } = metricData
        const query = `
        INSERT INTO Metrics (
            id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations, timestamp
        ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ? )
        `
        this.db.run(query, [
            id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations, timestamp
        ], callback)
    }

}

module.exports = MetricsModel;

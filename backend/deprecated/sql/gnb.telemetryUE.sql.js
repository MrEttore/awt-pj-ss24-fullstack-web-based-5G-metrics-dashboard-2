module.exports.INIT = `
CREATE TABLE IF NOT EXISTS 
    GnbTelemetryUe (
        rowId INTEGER PRIMARY KEY,
        gnbTelemetryRowId INT,
        ueId INTEGER,
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
        FOREIGN KEY (gnbTelemetryRowId) REFERENCES GnbTelementry(rowId)
    );
`

module.exports.INSERT = `
INSERT INTO 
    GnbTelemetryUe (
        ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler, 
        ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, gnbTelemetryRowId
    ) VALUES ( 
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? 
    );
`

module.exports.SELECT = `
SELECT 
    GnbTelemetryUe.rowId, ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler, ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr
FROM 
    GnbTelemetryUe 
JOIN
    GnbTelemetry
ON
    gnbTelemetryRowId = GnbTelemetry.rowId
`

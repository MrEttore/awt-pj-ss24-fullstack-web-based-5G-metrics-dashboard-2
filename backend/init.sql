DROP TABLE Metrics;

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

INSERT INTO Metrics (id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations, ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler, ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, timestamp) VALUES
(12345678, 600, 4, 0, 3349380000, 3349380000, 3, '1', 'a393', 1, 913132794, 9, 0, 282727529, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 85.3, 9, 19, 29, 1715085255102),
(12345678, 700, 4, 0, 3349380000, 3349380000, 3, '1', 'a393', 1, 913137329, 9, 0, 282729647, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 86, 9, 21, 29, 1715085256102),
(12345678, 800, 4, 0, 3349380000, 3349380000, 3, '1', 'a393', 1, 913141864, 9, 0, 282731733, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 85.5, 9, 20, 28.5, 1715085257102);


CREATE VIEW IF NOT EXISTS BaseStation AS
SELECT rowId, id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations, timestamp
FROM Metrics
WHERE frame AND slot AND pci AND dlCarrierFreq AND ulCarrierFreq AND avgLdpcIterations AND timestamp NOT NULL;

CREATE VIEW IF NOT EXISTS UE AS
SELECT rowId, ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler, ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, timestamp
FROM Metrics;


INSERT INTO BaseStation


CREATE TABLE IF NOT EXISTS Logs (
    rowId AUTOINCREMENT INTEGER PRIMARY KEY,
    logMessage TEXT,
    timestamp BIGINT
);

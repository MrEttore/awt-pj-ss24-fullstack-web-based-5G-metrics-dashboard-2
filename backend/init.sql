
DROP TABLE GnbTelemetry;


CREATE TABLE IF NOT EXISTS GnbTelemetry_ (
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

DROP TABLE GnbTelemetry
CREATE TABLE IF NOT EXISTS GnbTelemetry (
    rowId INTEGER PRIMARY KEY,
    id INTEGER,
    frame INTEGER,
    slot INTEGER,
    pci INTEGER,
    dlCarrierFreq INTEGER,
    ulCarrierFreq INTEGER,
    avgLdpcIterations INTEGER,
    timestamp BIGINT
);

DROP TABLE GnbTelemetryUe;
CREATE TABLE IF NOT EXISTS GnbTelemetryUe (
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
--    timestamp BIGINT
    FOREIGN KEY (gnbTelemetryRowId) REFERENCES GnbTelementry(rowId)
);


CREATE TABLE IF NOT EXISTS GnbConfiguration (
    rowId INTEGER PRIMARY KEY,
    absoluteFrequencySSB INTEGER,
    dlBandwidth INTEGER,
    dlCarrierFreq INTEGER,
    dlFrequencyBand INTEGER,
    cpuLoad INTEGER,
    gnbId TEXT,
    gnbName TEXT,
    nrCellId INTEGER,
    mcc INTEGER,
    mnc INTEGER,
    pci INTEGER,
    subcarrierSpacing INTEGER,
    ulBandwidth INTEGER,
    ulCarrierFreq INTEGER,
    ulFrequencyBand INTEGER,
    timestamp BIGINT,
    ulAbsoluteFrequencyPointA INTEGER,
    dlAbsoluteFrequencyPointA INTEGER,
    duplexMode TEXT
);

CREATE TABLE IF NOT EXISTS GnbLogs (
    rowId INTEGER PRIMARY KEY,
    timestamp BIGINT,
    payload TEXT
);

INSERT INTO GnbLogs (timestamp, payload) VALUES
(1715076990535, "[NR_MAC]   Frame.Slot 512.0");


CREATE TABLE IF NOT EXISTS GnbDetails (
    rowId INTEGER PRIMARY KEY,
    absoluteFrequencySSB INTEGER,
    dlBandwidth INTEGER,
    dlCarrierFreq INTEGER,
    dlFrequencyBand INTEGER,
    cpuLoad INTEGER,
    gnbId TEXT,
    gnbName TEXT,
    nrCellId INTEGER,
    mcc INTEGER,
    mnc INTEGER,
    pci INTEGER,
    subcarrierSpacing INTEGER,
    ulBandwidth INTEGER,
    ulCarrierFreq INTEGER,
    ulFrequencyBand INTEGER,
    timestamp BIGINT,
    ulAbsoluteFrequencyPointA INTEGER,
    dlAbsoluteFrequencyPointA INTEGER,
    duplexMode TEXT
);

INSERT INTO GnbConfiguration (absoluteFrequencySSB, dlBandwidth, dlCarrierFreq, dlFrequencyBand, cpuLoad, gnbId, gnbName, nrCellId, mcc, mnc, pci, subcarrierSpacing, ulBandwidth, ulCarrierFreq, ulFrequencyBand, timestamp, ulAbsoluteFrequencyPointA, dlAbsoluteFrequencyPointA, duplexMode) VALUES 
(620640, 100, 3349380000, 78, 70, '0xe00', 'gNB-OAI', 12345678, 1, 1, 0, 30000, 100, 3349380000, 78, 1715677062245, 620016, 620016, 'TDD'),
(620640, 100, 3349380000, 78, 70, '0xe00', 'gNB-OAI', 12345678, 1, 1, 0, 30000, 100, 3349380000, 78, 1715677062245, 620016, 620016, 'TDD'),
(620640, 100, 3349380000, 78, 70, '0xe00', 'gNB-OAI', 12345678, 1, 1, 0, 30000, 100, 3349380000, 78, 1715677062745, 620016, 620016, 'TDD'),
(620640, 100, 3349380000, 78, 70, '0xe00', 'gNB-OAI', 12345678, 1, 1, 0, 30000, 100, 3349380000, 78, 1715677062745, 620016, 620016, 'TDD'),
(620640, 100, 3349380000, 78, 70, '0xe00', 'gNB-OAI', 12345678, 1, 1, 0, 30000, 100, 3349380000, 78, 1715677063245, 620016, 620016, 'TDD'),
(620640, 100, 3349380000, 78, 70, '0xe00', 'gNB-OAI', 12345678, 1, 1, 0, 30000, 100, 3349380000, 78, 1715677063245, 620016, 620016, 'TDD'),
(620640, 100, 3349380000, 78, 70, '0xe00', 'gNB-OAI', 12345678, 1, 1, 0, 30000, 100, 3349380000, 78, 1715677063745, 620016, 620016, 'TDD'),
(620640, 100, 3349380000, 78, 70, '0xe00', 'gNB-OAI', 12345678, 1, 1, 0, 30000, 100, 3349380000, 78, 1715677063745, 620016, 620016, 'TDD'),
(620640, 100, 3349380000, 78, 70, '0xe00', 'gNB-OAI', 12345678, 1, 1, 0, 30000, 100, 3349380000, 78, 1715677064245, 620016, 620016, 'TDD'),
(620640, 100, 3349380000, 78, 70, '0xe00', 'gNB-OAI', 12345678, 1, 1, 0, 30000, 100, 3349380000, 78, 1715677064245, 620016, 620016, 'TDD'),
(620640, 100, 3349380000, 78, 70, '0xe00', 'gNB-OAI', 12345678, 1, 1, 0, 30000, 100, 3349380000, 78, 1715677064745, 620016, 620016, 'TDD'),
(620640, 100, 3349380000, 78, 70, '0xe00', 'gNB-OAI', 12345678, 1, 1, 0, 30000, 100, 3349380000, 78, 1715677064745, 620016, 620016, 'TDD');



INSERT INTO GnbTelemetry (id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations, timestamp) VALUES
(12345678, 600, 4, 0, 3349380000, 3349380000, 3, 1715085255102),
(12345678, 700, 4, 0, 3349380000, 3349380000, 3, 1715085256102),
(12345678, 800, 4, 0, 3349380000, 3349380000, 3, 1715085257102),
(12345678, 800, 4, 0, 3349380000, 3349380000, 3, 1715085257102),
(12345678, 900, 4, 0, 3349380000, 3349380000, 3, 1715085258102),
(12345678, 1000, 4, 0, 3349380000, 3349380000, 3, 1715085259102),
(12345678, 76, 4, 0, 3349380000, 3349380000, 3, 1715085260102),
(12345678, 276, 4, 0, 3349380000, 3349380000, 3, 1715085262102),
(12345678, 376, 4, 0, 3349380000, 3349380000, 3, 1715085263102),
(12345678, 476, 4, 0, 3349380000, 3349380000, 3, 1715085264102),
(12345678, 576, 4, 0, 3349380000, 3349380000, 3, 1715085265102),
(12345678, 676, 4, 0, 3349380000, 3349380000, 3, 1715085266102),
(12345678, 776, 4, 0, 3349380000, 3349380000, 3, 1715085267102),
(12345678, 876, 4, 0, 3349380000, 3349380000, 3, 1715085268102),
(12345678, 976, 4, 0, 3349380000, 3349380000, 3, 1715085269102),
(12345678, 52, 4, 0, 3349380000, 3349380000, 3, 1715085270102),
(12345678, 152, 4, 0, 3349380000, 3349380000, 3, 1715085271102),
(12345678, 252, 4, 0, 3349380000, 3349380000, 3, 1715085272102),
(12345678, 352, 4, 0, 3349380000, 3349380000, 3, 1715085273102),
(12345678, 452, 4, 0, 3349380000, 3349380000, 3, 1715085274102),
(12345678, 552, 4, 0, 3349380000, 3349380000, 3, 1715085275102),
(12345678, 652, 4, 0, 3349380000, 3349380000, 3, 1715085275102),
(12345678, 752, 4, 0, 3349380000, 3349380000, 3, 1715085277102),
(12345678, 852, 4, 0, 3349380000, 3349380000, 3, 1715085278102),
(12345678, 952, 4, 0, 3349380000, 3349380000, 3, 1715085279102),
(12345678, 28, 4, 0, 3349380000, 3349380000, 3, 1715085280102);

-- INSERT INTO GnbTelemetryUe(ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler, ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, timestamp) VALUES
-- ('1', 'a393', 1, 913132794, 9, 0, 282727529, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 85.3, 9, 19, 29, 1715085255102),
-- ('1', 'a393', 1, 913137329, 9, 0, 282729647, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 86, 9, 21, 29, 1715085256102),
-- ('1', 'a393', 1, 913141864, 9, 0, 282731733, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 85.5, 9, 20, 28.5, 1715085257102),
-- ('1', 'a393', 1, 913141864, 9, 0, 282731733, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 85.5, 9, 20, 28.5, 1715085257102),
-- ('1', 'a393', 1, 913146399, 9, 0, 282733642, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 86, 9, 22, 29, 1715085258102),
-- ('1', 'a393', 1, 913150934, 9, 0, 282735744, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 86, 9, 20, 28.5, 1715085259102),
-- ('1', 'a393', 1, 913155469, 9, 0, 282737846, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 86, 9, 20, 30, 1715085260102),
-- ('1', 'a393', 1, 913164539, 9, 0, 282742050, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 86, 9, 21, 29, 1715085262102),
-- ('1', 'a393', 1, 913169074, 9, 0, 282743943, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 86, 9, 21, 30, 1715085263102),
-- ('1', 'a393', 1, 913173609, 9, 0, 282746061, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 86, 9, 21, 29, 1715085264102),
-- ('1', 'a393', 1, 913178144, 9, 0, 282748147, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 86, 9, 19, 30, 1715085265102),
-- ('1', 'a393', 1, 913182679, 9, 0, 282750265, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 86, 9, 20, 29, 1715085266102),
-- ('1', 'a393', 1, 913187214, 9, 0, 282752351, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 85.5, 9, 20, 29, 1715085267102),
-- ('1', 'a393', 1, 913191749, 9, 0, 282754260, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 85.6, 9, 20, 28, 1715085268102),
-- ('1', 'a393', 1, 913196284, 9, 0, 282756362, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 85.6, 9, 20, 27, 1715085269102),
-- ('1', 'a393', 1, 913200819, 9, 0, 282758464, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 85.5, 9, 19, 28, 1715085270102),
-- ('1', 'a393', 1, 913205354, 9, 0, 282760566, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 85.9, 9, 20, 27.5, 1715085271102),
-- ('1', 'a393', 1, 913209889, 9, 0, 282762668, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 85.7, 9, 21, 29, 1715085272102),
-- ('1', 'a393', 1, 913214424, 9, 0, 282764561, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 85.6, 9, 20, 28.5, 1715085273102),
-- ('1', 'a393', 1, 913218959, 9, 0, 282766679, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 85.6, 9, 21, 27, 1715085274102),
-- ('1', 'a393', 1, 913223494, 9, 0, 282768765, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 85.6, 9, 20, 28.5, 1715085275102),
-- ('1', 'a393', 1, 913228029, 9, 0, 282770883, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 85.9, 9, 19, 29.5, 1715085276102),
-- ('1', 'a393', 1, 913232564, 9, 0, 282772969, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 85.7, 9, 20, 28.5, 1715085277102),
-- ('1', 'a393', 1, 913237099, 9, 0, 282774878, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 86, 9, 20, 30.5, 1715085278102),
-- ('1', 'a393', 1, 913241634, 9, 0, 282776980, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 86, 9, 20, 30.5, 1715085279102),
-- ('1', 'a393', 1, 913246169, 9, 0, 282779082, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 86, 9, 20, 31.5, 1715085280102);

INSERT INTO GnbTelemetryUe(ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler, ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, gnbTelemetryRowId) VALUES
('1', 'a393', 1, 913132794, 9, 0, 282727529, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 85.3, 9, 19, 29, 1),
('1', 'a393', 1, 913137329, 9, 0, 282729647, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 86, 9, 21, 29, 2),
('1', 'a393', 1, 913141864, 9, 0, 282731733, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 85.5, 9, 20, 28.5, 3),
('1', 'a393', 1, 913141864, 9, 0, 282731733, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 85.5, 9, 20, 28.5, 4),
('1', 'a393', 1, 913146399, 9, 0, 282733642, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 86, 9, 22, 29, 5),
('1', 'a393', 1, 913150934, 9, 0, 282735744, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 86, 9, 20, 28.5, 6),
('1', 'a393', 1, 913155469, 9, 0, 282737846, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 86, 9, 20, 30, 7),
('1', 'a393', 1, 913164539, 9, 0, 282742050, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 86, 9, 21, 29, 8),
('1', 'a393', 1, 913169074, 9, 0, 282743943, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 86, 9, 21, 30, 9),
('1', 'a393', 1, 913173609, 9, 0, 282746061, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 86, 9, 21, 29, 10),
('1', 'a393', 1, 913178144, 9, 0, 282748147, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 86, 9, 19, 30, 11),
('1', 'a393', 1, 913182679, 9, 0, 282750265, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 86, 9, 20, 29, 12),
('1', 'a393', 1, 913187214, 9, 0, 282752351, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 85.5, 9, 20, 29, 13),
('1', 'a393', 1, 913191749, 9, 0, 282754260, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 85.6, 9, 20, 28, 14),
('1', 'a393', 1, 913196284, 9, 0, 282756362, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 85.6, 9, 20, 27, 15),
('1', 'a393', 1, 913200819, 9, 0, 282758464, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 85.5, 9, 19, 28, 16),
('1', 'a393', 1, 913205354, 9, 0, 282760566, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 85.9, 9, 20, 27.5, 17),
('1', 'a393', 1, 913209889, 9, 0, 282762668, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 85.7, 9, 21, 29, 18),
('1', 'a393', 1, 913214424, 9, 0, 282764561, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 85.6, 9, 20, 28.5, 19),
('1', 'a393', 1, 913218959, 9, 0, 282766679, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 85.6, 9, 21, 27, 20),
('1', 'a393', 1, 913223494, 9, 0, 282768765, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 85.6, 9, 20, 28.5, 21),
('1', 'a393', 1, 913228029, 9, 0, 282770883, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 85.9, 9, 19, 29.5, 22),
('1', 'a393', 1, 913232564, 9, 0, 282772969, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 85.7, 9, 20, 28.5, 23),
('1', 'a393', 1, 913237099, 9, 0, 282774878, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -96, 86, 9, 20, 30.5, 24),
('1', 'a393', 1, 913241634, 9, 0, 282776980, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 86, 9, 20, 30.5, 25),
('1', 'a393', 1, 913246169, 9, 0, 282779082, 9, 0, 2, '(0,0)', 58, 23, -10.5, 23.5, -95, 86, 9, 20, 31.5, 26);

CREATE VIEW IF NOT EXISTS BaseStation AS
SELECT rowId, id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations, timestamp
FROM Metrics
WHERE id IS NOT NULL 
  AND frame IS NOT NULL 
  AND slot IS NOT NULL 
  AND pci IS NOT NULL 
  AND dlCarrierFreq IS NOT NULL 
  AND ulCarrierFreq IS NOT NULL 
  AND avgLdpcIterations IS NOT NULL 
  AND timestamp IS NOT NULL;


CREATE VIEW IF NOT EXISTS UE AS
SELECT rowId, ueId, rnti, inSync, dlBytes, dlMcs, dlBler, ulBytes, ulMcs, ulBler, ri, pmi, phr, pcmax, rsrq, sinr, rsrp, rssi, cqi, pucchSnr, puschSnr, timestamp
FROM Metrics
WHERE ueId IS NOT NULL 
  AND rnti IS NOT NULL 
  AND inSync IS NOT NULL 
  AND dlBytes IS NOT NULL 
  AND dlMcs IS NOT NULL 
  AND dlBler IS NOT NULL 
  AND ulBytes IS NOT NULL 
  AND ulMcs IS NOT NULL 
  AND ulBler IS NOT NULL 
  AND ri IS NOT NULL 
  AND pmi IS NOT NULL 
  AND phr IS NOT NULL 
  AND pcmax IS NOT NULL 
  AND rsrq IS NOT NULL 
  AND sinr IS NOT NULL 
  AND rsrp IS NOT NULL 
  AND rssi IS NOT NULL 
  AND cqi IS NOT NULL 
  AND pucchSnr IS NOT NULL 
  AND puschSnr IS NOT NULL 
  AND timestamp IS NOT NULL;

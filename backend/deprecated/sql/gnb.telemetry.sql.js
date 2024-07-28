module.exports.INIT = `
CREATE TABLE IF NOT EXISTS
    GnbTelemetry (
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
`

module.exports.INSERT = `
INSERT INTO 
    GnbTelemetry (
        id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations, timestamp
    ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?
    );
`


module.exports.SELECT = `
SELECT 
    rowId, id, frame, slot, pci, dlCarrierFreq, ulCarrierFreq, avgLdpcIterations, timestamp
FROM 
    GnbTelemetry
`

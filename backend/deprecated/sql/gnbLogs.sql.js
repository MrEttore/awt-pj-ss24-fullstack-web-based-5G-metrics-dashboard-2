module.exports.INIT = `
CREATE TABLE IF NOT EXISTS 
    GnbLogs (
        rowId INTEGER PRIMARY KEY,
        timestamp BIGINT,
        payload TEXT
    );
`

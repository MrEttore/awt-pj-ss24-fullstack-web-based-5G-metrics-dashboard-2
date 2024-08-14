module.exports = {
    ADD_UE: `INSERT INTO Ues (timestamp, ueId)
        VALUES ( ?, ? )`,
    
    ADD_MESSAGE: `INSERT INTO Messages (timestamp, destination, payload)
        VALUES ( ?, ?, ? )`,

    GET: `SELECT payload
        FROM Messages
        WHERE ? <= timestamp 
        AND timestamp <= ?
        AND destination = ?
        ORDER BY timestamp ASC
    `,
    
    GET_UES: `
        SELECT DISTINCT ueId FROM Ues
        WHERE ? <= timestamp
        AND timestamp <= ?`,

    GET_LATEST: `
        SELECT payload FROM Messages
        WHERE destination LIKE ?
        ORDER BY timestamp DESC`,
    
    GET_2: `WITH NumberedMessages AS (
        SELECT
            rowId,
            timestamp,
            destination,
            payload,
            ROW_NUMBER() OVER (ORDER BY timestamp) AS row_num
        FROM Messages
        WHERE destination LIKE ? AND timestamp BETWEEN ? AND ?
    ),
    ModuloTeiler AS (
        SELECT
            CASE
                WHEN COUNT(*) > ? THEN FLOOR(COUNT(*) * 1.0 / ?)
                ELSE 1
            END AS teiler
        FROM NumberedMessages
    )
    SELECT *
    FROM NumberedMessages, ModuloTeiler
    WHERE (row_num - 1) % teiler = 0
    LIMIT ?;
    `
}

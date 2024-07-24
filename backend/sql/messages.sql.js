module.exports = {
    ADD_UE: `INSERT INTO Ues (timestamp, ueId)
        VALUES ( ?, ? )`,
    
    ADD_MESSAGE: `INSERT INTO Messages (timestamp, destination, payload)
        VALUES ( ?, ?, ? )`,
    
    GET_WITH_REDUCTION: `WITH NumberedMessages AS (
            SELECT 
                rowId, 
                timestamp, 
                destination, 
                payload,
                ROW_NUMBER() OVER (ORDER BY timestamp) AS row_num
            FROM Messages
            WHERE destination LIKE ? AND ? <= timestamp AND timestamp <= ?
        )
        SELECT 
            rowId, 
            timestamp, 
            destination, 
            payload
        FROM 
            NumberedMessages
        WHERE 
            (row_num - 1) % (SELECT CASE WHEN COUNT(*) > ? THEN COUNT(*) / ? ELSE 1 END FROM NumberedMessages) = 0
        ORDER BY 
            timestamp
        LIMIT ?`,

    GET_UES: `
        SELECT DISTINCT ueId FROM Ues
        WHERE ? <= timestamp
        AND timestamp <= ?`,

    GET_LATEST_TIMESTAMP: `
        SELECT timestamp FROM Messages
        WHERE destination LIKE ?
        ORDER BY timestamp DESC`
}

const INIT = `
    CREATE TABLE IF NOT EXISTS 
        Cn5gTelemetry (
            rowId INTEGER PRIMARY KEY,
            timestamp BIGINT NOT NULL,
            amfStatus TEXT NOT NULL,
            amfMessage TEXT NOT NULL,
            ausfStatus TEXT NOT NULL,
            ausfMessage TEXT NOT NULL,
            nrfStatus TEXT NOT NULL,
            nrfMessage TEXT NOT NULL,
            smfStatus TEXT NOT NULL,
            smfMessage TEXT NOT NULL,
            upfStatus TEXT NOT NULL,
            upfMessage TEXT NOT NULL,
            udmStatus TEXT NOT NULL,
            udmMessage TEXT NOT NULL,
            udrStatus TEXT NOT NULL,
            udrMessage TEXT NOT NULL,
            nssfStatus TEXT NOT NULL,
            nssfMessage TEXT NOT NULL,
            nefStatus TEXT NOT NULL,
            nefMessage TEXT,
            mysqlStatus TEXT NOT NULL,
            mysqlMessage TEXT NOT NULL,
            extdnStatus TEXT NOT NULL,
            extdnMessage TEXT NOT NULL,
            asteriskStatus TEXT NOT NULL,
            asteriskMessage TEXT NOT NULL,
            openspeedtestStatus TEXT NOT NULL,
            openspeedtestMessage TEXT NOT NULL,
            oaiExtDnUplinkState TEXT NOT NULL,
            oaiExtDnDownlinkInstances TEXT
        );`

const SELECT = `
    SELECT json_object(
        'timestamp', timestamp,
        'amf', json_object(
            'status', amfStatus,
            'message', amfMessage
        ),
        'ausf', json_object(
            'status', ausfStatus,
            'message', ausfMessage
        ),
        'nrf', json_object(
            'status', nrfStatus,
            'message', nrfMessage
        ),
        'smf', json_object(
            'status', smfStatus,
            'message', smfMessage
        ),
        'upf', json_object(
            'status', upfStatus,
            'message', upfMessage
        ),
        'udm', json_object(
            'status', udmStatus,
            'message', udmMessage
        ),
        'udr', json_object(
            'status', udrStatus,
            'message', udrMessage
        ),
        'nssf', json_object(
            'status', nssfStatus,
            'message', nssfMessage
        ),
        'nef', json_object(
            'status', nefStatus,
            'message', nefMessage
        ),
        'mysql', json_object(
            'status', mysqlStatus,
            'message', mysqlMessage
        ),
        'extdn', json_object(
            'status', extdnStatus,
            'message', extdnMessage
        ),
        'asterisk', json_object(
            'status', asteriskStatus,
            'message', asteriskMessage
        ),
        'openspeedtest', json_object(
            'status', openspeedtestStatus,
            'message', openspeedtestMessage
        ),
        'oaiExtDnUplinkState', oaiExtDnUplinkState,
        'oaiExtDnDownlinkInstances', oaiExtDnDownlinkInstances
    ) AS jsonData
    FROM Cn5gTelemetry`
    
const INSERT = `
    INSERT INTO Cn5gTelemetry (
        timestamp,
        amfStatus, amfMessage,
        ausfStatus, ausfMessage,
        nrfStatus, nrfMessage,
        smfStatus, smfMessage,
        upfStatus, upfMessage,
        udmStatus, udmMessage,
        udrStatus, udrMessage,
        nssfStatus, nssfMessage,
        nefStatus, nefMessage,
        mysqlStatus, mysqlMessage,
        extdnStatus, extdnMessage,
        asteriskStatus, asteriskMessage,
        openspeedtestStatus, openspeedtestMessage,
        oaiExtDnUplinkState, oaiExtDnDownlinkInstances
    ) 
    VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
    );`

module.exports = {
    INIT, SELECT, INSERT
}

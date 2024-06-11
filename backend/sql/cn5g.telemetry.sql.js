const INIT = `
    CREATE TABLE IF NOT EXISTS 
        Cn5gTelemetry (
            rowId INTEGER PRIMARY KEY,
            timestamp BIGINT,
            amfStatus TEXT,
            amfMessage TEXT,
            ausfStatus TEXT,
            ausfMessage TEXT,
            nrfStatus TEXT,
            nrfMessage TEXT,
            smfStatus TEXT,
            smfMessage TEXT,
            upfStatus TEXT,
            upfMessage TEXT,
            udmStatus TEXT,
            udmMessage TEXT,
            udrStatus TEXT,
            udrMessage TEXT,
            nssfStatus TEXT,
            nssfMessage TEXT,
            nefStatus TEXT,
            nefMessage TEXT,
            mysqlStatus TEXT,
            mysqlMessage TEXT,
            extdnStatus TEXT,
            extdnMessage TEXT,
            asteriskStatus TEXT,
            asteriskMessage TEXT,
            openspeedtestStatus TEXT,
            openspeedtestMessage TEXT,
            oaiExtDnUplinkState TEXT,
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
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
    );`

module.exports = {
    INIT, SELECT, INSERT
}

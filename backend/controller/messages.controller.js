const model = require('../model/messages.model');

/**
 * Controller for adding a new message.
 */
module.exports.add = async function (req, res) {
    try {
        const { timestamp, destination, payload } = req.body;
        
        if (!timestamp || !destination || !payload) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        await model.add(timestamp, destination, payload);
        return res.status(201).json({ message: 'Message added successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
};

/**
 * Get messages from the database based on topic and time interval.
 */
module.exports.get = async function (req, res) {
    try {
        const { topic, timeStart, timeEnd, limit } = req.query;

        if (!topic) {
            return res.status(400).json({ error: 'Missing required parameter: topic' });
        }

        // Übersetze das übergebene topic in die interne Repräsentation
        let internalTopic;
        switch (topic) {
            case 'gnbTelemetry':
                internalTopic = model.topics.GNB_TELEMETRY;
                break;
            case 'health':
                internalTopic = model.topics.HEALTH;
                break;
            case 'logs':
                internalTopic = model.topics.LOGS;
                break;
            case 'gnbStatus':
                internalTopic = model.topics.GNB_STATUS;
                break;
            default:
                return res.status(400).json({ error: 'Invalid topic parameter' });
        }

        const data = await model.get(internalTopic, timeStart, timeEnd, limit);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
}

/**
 * Get log messages from the database within a specified time interval.
 */
module.exports.getGnbLogs = async function (req, res) {
    try {
        const { timeStart, timeEnd, limit } = req.query;

        const data = await model.get(model.topics.LOGS, timeStart, timeEnd, limit);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
}

/**
 * Get health data from the database within a specified time interval.
 */
module.exports.getHealth = async function (req, res) {
    try {
        const { timeStart, timeEnd, limit } = req.query;

        const data = await model.get(model.topics.HEALTH, timeStart, timeEnd, limit);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
}

/**
 * Get telemetry data from the database and filter by UE IDs.
 */
module.exports.getGnbTelemetry = async function (req, res) {
    try {
        const { timeStart, timeEnd, ueIds, limit } = req.query;

        // Convert ueIds to an array of integers
        let ueIdArray = [];
        if (ueIds) {
            ueIdArray = ueIds.split(',').map(id => parseInt(id));
        }

        const data = await model.getTelemetry(timeStart, timeEnd, limit, ueIdArray);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
}

/**
 * Get a list of unique UE IDs from telemetry data within a specified time interval.
 */
module.exports.getUEs = async function (req, res) {
    try {
        const { timeStart, timeEnd } = req.query;

        const ueIds = await model.getUEs(timeStart, timeEnd);
        return res.status(200).json(ueIds);
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
}

module.exports.addTelemetry = async function(req, res) {
    const timestamp = req.body.timestamp

    if (!timestamp || isNaN(timestamp)) {
    }

    try {
        const id = await model.add(timestamp, model.topics.GNB_TELEMETRY, JSON.stringify(req.body))
        return res.status(201).json({ success: true, id: id });
    } catch (error) {
        return res.status(500).json({error: error.toString()})
    }
}

module.exports.addHealth = async function(req, res) {
    const timestamp = req.body.timestamp

    if (!timestamp ||isNaN(timestamp)) {}

    try {
        const id = await model.add(timestamp, model.topics.HEALTH, JSON.stringify(req.body))
        return res.status(201).json({ success: true, id: id });
    } catch (error) {
        return res.status(500).json({error: error.toString()})
    }
}

module.exports.addLogs = async function(req, res) {
    const timestamp = req.body.timestamp

    let id;
    try {
        id = await model.add(timestamp, model.topics.LOGS, JSON.stringify(req.body))
    } catch (error) {
        return res.status(500).json({error: error.toString()})
    }
    return res.status(201).json({ success: true, id: id });
}

module.exports.getLatest = async function (req, res) {
    const { topic } = req.query

    let internalTopic;
    switch (topic) {
        case 'gnbTelemetry':
            internalTopic = model.topics.GNB_TELEMETRY;
            break;
        case 'health':
            internalTopic = model.topics.HEALTH;
            break;
        case 'logs':
            internalTopic = model.topics.LOGS;
            break;
        case 'gnbStatus':
            internalTopic = model.topics.GNB_STATUS;
            break;
        default:
            return res.status(400).json({ error: 'Invalid topic parameter' });
    }

    try {
        const latestTimestamp = await model.getLatest(internalTopic)
        return res.status(200).json(latestTimestamp)
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
}

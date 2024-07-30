const express = require('express');
const router = express.Router();
const controller = require('../controller/messages.controller');

/**
 * @route POST /api/messages
 * @description Add a new message to the database.
 */
router.post('/', controller.add);

/**
 * @route GET /api/messages
 * @description Get messages from the database based on topic and time interval.
 */
router.get('/', controller.get);

/**
 * @route GET /api/messages/logs
 * @description Get log messages from the database within a specified time interval.
 */
router.get('/logs', controller.getGnbLogs);

/**
 * @route GET /api/messages/health
 * @description Get health data from the database within a specified time interval.
 */
router.get('/health', controller.getHealth);

/**
 * @route GET /api/messages/gnbTelemetry
 * @description Get telemetry data from the database and filter by UE IDs.
 */
router.get('/gnbTelemetry', controller.getGnbTelemetry);

/**
 * @route GET /api/messages/gnbTelemetry/ues
 * @description Get a list of unique UE IDs from telemetry data within a specified time interval.
 */
router.get('/gnbTelemetry/ues', controller.getUEs);

/**
 * @route GET /api/messages/latestTimestamp
 * @description Get the latest timestamp of a given topic.
 */
router.get('/latestTimestamp', controller.getLatestTimestamp);

module.exports = router;

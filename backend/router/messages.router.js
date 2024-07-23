const express = require('express');
const router = express.Router();
const controller = require('../controller/messages.controller');

/**
 * @route POST /api/messages
 * @description Add a new message to the database.
 */
router.post('/messages', controller.add);

/**
 * @route GET /api/messages
 * @description Get messages from the database based on topic and time interval.
 */
router.get('/messages', controller.get);

/**
 * @route GET /api/logs
 * @description Get log messages from the database within a specified time interval.
 */
router.get('/gnb/logs', controller.getLogs);

/**
 * @route GET /api/health
 * @description Get health data from the database within a specified time interval.
 */
router.get('/cn5g/telemetry', controller.getHealth);

/**
 * @route GET /api/telemetry
 * @description Get telemetry data from the database and filter by UE IDs.
 */
router.get('/gnb/telemetry', controller.getTelemetry);

/**
 * @route GET /api/ues
 * @description Get a list of unique UE IDs from telemetry data within a specified time interval.
 */
router.get('/ues', controller.getUEs);

router.post('/gnb/telemetry', controller.addTelemetry);

router.post('/gnb/logs', controller.addLogs);

router.post('/cn5g/telemetry', controller.addHealth);

module.exports = router;

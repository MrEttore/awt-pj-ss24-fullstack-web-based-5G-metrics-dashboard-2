const express = require('express');
const router = express.Router();
const controller = require('../controller/messages.controller');

/**
 * @swagger
 * tags:
 *   name: Messages
 *   description: API to manage 5G metric messages.
 */

/**
 * @swagger
 * /api/messages:
 *   post:
 *     summary: Add a new message to the database
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               timestamp:
 *                 type: number
 *                 description: The UNIX timestamp of the message.
 *               destination:
 *                 type: string
 *                 description: The topic of the message.
 *               payload:
 *                 type: object
 *                 description: The content of the message.
 *             example:
 *               timestamp: 1629885291
 *               destination: gnbTelemetry
 *               payload: { key: "value" }
 *     responses:
 *       201:
 *         description: The message was successfully added.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message.
 *       400:
 *         description: Missing required fields.
 *       500:
 *         description: Internal server error.
 */
router.post('/', controller.add);

/**
 * @swagger
 * /api/messages:
 *   get:
 *     summary: Get messages from the database based on topic and time interval
 *     tags: [Messages]
 *     parameters:
 *       - in: query
 *         name: topic
 *         schema:
 *           type: string
 *           description: The topic of the messages to retrieve (e.g., 'gnbTelemetry', 'health', 'logs', 'telemetry').
 *       - in: query
 *         name: timeStart
 *         schema:
 *           type: string
 *           format: date-time
 *           description: Start time of the interval in ISO format (e.g., '2023-08-13T12:00:00Z').
 *       - in: query
 *         name: timeEnd
 *         schema:
 *           type: string
 *           format: date-time
 *           description: End time of the interval in ISO format (e.g., '2023-08-14T12:00:00Z').
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           description: Maximum number of records to return.
 *     responses:
 *       200:
 *         description: A list of messages.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   topic:
 *                     type: string
 *                     description: The topic of the message.
 *                   payload:
 *                     type: object
 *                     description: The content of the message.
 *                   timestamp:
 *                     type: string
 *                     format: date-time
 *                     description: The timestamp of the message.
 *       400:
 *         description: Missing or invalid query parameters.
 *       500:
 *         description: Internal server error.
 */
router.get('/', controller.get);

/**
 * @swagger
 * /api/messages/logs:
 *   get:
 *     summary: Get log messages from the database within a specified time interval
 *     tags: [Messages]
 *     parameters:
 *       - in: query
 *         name: timeStart
 *         schema:
 *           type: string
 *           format: date-time
 *           description: Start time of the interval in ISO format.
 *       - in: query
 *         name: timeEnd
 *         schema:
 *           type: string
 *           format: date-time
 *           description: End time of the interval in ISO format.
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           description: Maximum number of records to return.
 *     responses:
 *       200:
 *         description: A list of log messages.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   topic:
 *                     type: string
 *                     description: The topic of the log.
 *                   payload:
 *                     type: object
 *                     description: The content of the log message.
 *                   timestamp:
 *                     type: string
 *                     format: date-time
 *                     description: The timestamp of the log message.
 *       400:
 *         description: Missing or invalid query parameters.
 *       500:
 *         description: Internal server error.
 */
router.get('/logs', controller.getGnbLogs);

/**
 * @swagger
 * /api/messages/health:
 *   get:
 *     summary: Get health data from the database within a specified time interval
 *     tags: [Messages]
 *     parameters:
 *       - in: query
 *         name: timeStart
 *         schema:
 *           type: string
 *           format: date-time
 *           description: Start time of the interval in ISO format.
 *       - in: query
 *         name: timeEnd
 *         schema:
 *           type: string
 *           format: date-time
 *           description: End time of the interval in ISO format.
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           description: Maximum number of records to return.
 *     responses:
 *       200:
 *         description: A list of health data messages.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   topic:
 *                     type: string
 *                     description: The topic of the health data.
 *                   payload:
 *                     type: object
 *                     description: The content of the health message.
 *                   timestamp:
 *                     type: string
 *                     format: date-time
 *                     description: The timestamp of the health message.
 *       400:
 *         description: Missing or invalid query parameters.
 *       500:
 *         description: Internal server error.
 */
router.get('/health', controller.getHealth);

/**
 * @swagger
 * /api/messages/gnbTelemetry:
 *   get:
 *     summary: Get telemetry data from the database and filter by UE IDs
 *     tags: [Messages]
 *     parameters:
 *       - in: query
 *         name: ueIds
 *         schema:
 *           type: string
 *           description: Comma-separated list of UE IDs to filter by.
 *       - in: query
 *         name: timeStart
 *         schema:
 *           type: string
 *           format: date-time
 *           description: Start time of the interval in ISO format.
 *       - in: query
 *         name: timeEnd
 *         schema:
 *           type: string
 *           format: date-time
 *           description: End time of the interval in ISO format.
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           description: Maximum number of records to return.
 *     responses:
 *       200:
 *         description: A list of telemetry data.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   topic:
 *                     type: string
 *                     description: The topic of the telemetry data.
 *                   payload:
 *                     type: object
 *                     description: The content of the telemetry data.
 *                   timestamp:
 *                     type: string
 *                     format: date-time
 *                     description: The timestamp of the telemetry data.
 *       400:
 *         description: Missing or invalid query parameters.
 *       500:
 *         description: Internal server error.
 */
router.get('/gnbTelemetry', controller.getGnbTelemetry);

/**
 * @swagger
 * /api/messages/gnbTelemetry/ues:
 *   get:
 *     summary: Get a list of unique UE IDs from telemetry data within a specified time interval
 *     tags: [Messages]
 *     parameters:
 *       - in: query
 *         name: timeStart
 *         schema:
 *           type: string
 *           format: date-time
 *           description: Start time of the interval in ISO format.
 *       - in: query
 *         name: timeEnd
 *         schema:
 *           type: string
 *           format: date-time
 *           description: End time of the interval in ISO format.
 *     responses:
 *       200:
 *         description: A list of unique UE IDs.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *       400:
 *         description: Missing or invalid query parameters.
 *       500:
 *         description: Internal server error.
 */
router.get('/gnbTelemetry/ues', controller.getUEs);

router.get('/latest', controller.getLatest);

module.exports = router;

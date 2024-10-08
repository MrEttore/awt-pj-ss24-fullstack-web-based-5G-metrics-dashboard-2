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
 *                 type: string
 *                 description: The content of the message.
 *             example:
 *               timestamp: 1715076982855
 *               destination: "gnb.logs"
 *               payload: "{\"timestamp\":1715076982855,\"payload\":\"UE a393: UL-RI 1, TPMI 0\"}"
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
 *         required: true
 *         description: The topic for which to retrieve messages.
 *         example: logs
 *         schema:
 *           type: string
 *           enum: [telemetry, health, logs, gnbStatus]
 *       - in: query
 *         name: timeStart
 *         schema:
 *           type: number
 *           description: Start time of the interval as a UNIX timestamp.
 *           example: 1715076982855
 *       - in: query
 *         name: timeEnd
 *         schema:
 *           type: number
 *           description: End time of the interval as a UNIX timestamp.
 *           example: 1715076982855
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
 *                     type: number
 *                     description: The UNIX timestamp of the message.
 *       400:
 *         description: Missing or invalid query parameters.
 *       500:
 *         description: Internal server error.
 */
router.get('/', controller.get);

/**
 * @swagger
 * /api/messages/telemetry:
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
 *           type: number
 *           description: Start time of the interval as a UNIX timestamp.
 *           example: 1715076982855
 *       - in: query
 *         name: timeEnd
 *         schema:
 *           type: number
 *           description: End time of the interval as a UNIX timestamp.
 *           example: 1715076982855
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
 *                     type: number
 *                     description: The UNIX timestamp of the telemetry data.
 *       400:
 *         description: Missing or invalid query parameters.
 *       500:
 *         description: Internal server error.
 */
router.get('/telemetry', controller.getGnbTelemetry);

/**
 * @swagger
 * /api/messages/telemetry/ues:
 *   get:
 *     summary: Get a list of unique UE IDs from telemetry data within a specified time interval
 *     tags: [Messages]
 *     parameters:
 *       - in: query
 *         name: timeStart
 *         schema:
 *           type: number
 *           description: Start time of the interval as a UNIX timestamp.
 *           example: 1715076982855
 *       - in: query
 *         name: timeEnd
 *         schema:
 *           type: number
 *           description: End time of the interval as a UNIX timestamp.
 *           example: 1715076982855
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
router.get('/telemetry/ues', controller.getUEs);

/**
 * @swagger
 * /api/messages/latest:
 *   get:
 *     summary: Retrieve the latest timestamp for a specific topic
 *     description: Returns the latest timestamp available for the specified topic.
 *     tags:
 *       - Messages
 *     parameters:
 *       - in: query
 *         name: topic
 *         required: true
 *         schema:
 *           type: string
 *           enum: [telemetry, health, logs, gnbStatus]
 *         description: The topic for which to retrieve the latest timestamp.
 *         example: logs
 *     responses:
 *       200:
 *         description: Latest timestamp for the specified topic.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timestamp:
 *                   type: number
 *                   description: The UNIX timestamp of the latest message for the specified topic.
 *                   example: 1629985291
 *       400:
 *         description: Invalid topic parameter.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Invalid topic parameter.
 *       500:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "An error occurred while retrieving the latest timestamp."
 */
router.get('/latest', controller.getLatest);

module.exports = router;

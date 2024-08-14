/*
* deprecated endpoints that are supported for compatibility
*/

const express = require('express');
const router = express.Router();
const controller = require('../controller/messages.controller');


router.post('/gnb/telemetry', controller.addTelemetry);

router.post('/gnb/logs', controller.addLogs);

router.post('/cn5g/telemetry', controller.addHealth);

router.get('/gnb/telemetry', controller.getGnbTelemetry);

router.get('/gnb/logs', controller.getGnbLogs);

router.get('/cn5g/telemetry', controller.getHealth);

router.get('/ues', controller.getUEs);

router.get('/latest', controller.getLatest);

module.exports = router;
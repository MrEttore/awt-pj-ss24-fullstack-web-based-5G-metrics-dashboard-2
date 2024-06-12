const express = require('express')

/* Import gnb.telemetry.controller object */
const controller = require('../controller/gnb.telemetry.controller')

/* Initialize router */
const router = express.Router()

/* Mount getAll */
router.get('/', async (req, res) => {
    await controller.getAll(req, res)
});

/* Mount get */
router.get('/:id', async (req, res) => {
    await controller.get(req, res)
});

/* Mount add */
router.post('/', async (req, res) => {
    await controller.add(req, res)
});

/* Mount remove */
router.delete('/', async (req, res) => {
    await controller.remove(req, res)
});

module.exports = router

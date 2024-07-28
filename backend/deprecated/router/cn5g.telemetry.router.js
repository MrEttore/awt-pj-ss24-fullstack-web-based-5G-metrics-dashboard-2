const express = require('express')
const AbstractController = require('../controller/abstract.controller')

const model = require('../model/cn5g.telemetry.model')

const router = express.Router()

/* Initialize controller */
const controller = new AbstractController(model)

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

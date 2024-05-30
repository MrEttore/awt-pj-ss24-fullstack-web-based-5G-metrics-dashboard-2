const express = require('express')
const GenericController = require('../controller/generic.controller')

const model = require('../model/gnb.configuration.model')

const router = express.Router()

/* Initialize controller */
const controller = new GenericController(model)

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

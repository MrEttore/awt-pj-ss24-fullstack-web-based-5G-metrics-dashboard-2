
const express = require('express')

const router = express.Router()

const model = require('../model/cn5g.telemetry.model')

router.get('/', async (req, res) => {
    const rows = await model.getAll({...req.query})
    for (let row of rows) {
        row.href = req.originalUrl+ '/' + row.rowId
    }
    res.json(rows)
})

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)

    const row = await model.get(id)
    if (!row) {
        return res.status(400).send();
    }
    row.href = req.originalUrl;
    res.json(row);
})

module.exports = router;

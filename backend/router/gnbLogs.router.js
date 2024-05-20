// gnbLogs.router.js

const express = require('express')
const model = require('../model/gnbLogs.model')

const router = express.Router()

router.get('/api/gnb/logs', async (req, res) => {
    const rows = await model.getAll({ ...req.query })
    if (rows) {
        rows.forEach((row) => {
            row.href = `/api/gnb/logs/${row.rowId}`
        })
        res.status(200).json(rows)
    }
    else {
        res.status(404).send()
    }
})

router.get('/api/gnb/logs/:id', async (req, res) => {
    const { id } = req.params
    const row = await model.get(id)

    if (row && row.rowId == id) {
        row.href = `/api/gnb/logs/${row.rowId}`
        res.status(200).json(row)
    } else {
        res.status(404).send()
    }
})

router.post('/api/gnb/logs', async () => {})

module.exports = router;

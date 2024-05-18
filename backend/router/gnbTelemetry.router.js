// gnbTelemetry.router.js

const express = require('express');
// const db = require('../database')

const gnbTelemetryModel = require('../model/gnbTelemetry.model')
const gnbTelemetryUeModel = require('../model/gnbTelemetryUe.model')

const router = express.Router()

// const gnbTelemetryModel = new GnbTelemetryModel(db);
// const gnbTelemetryUeModel = gnbTelemetryUeModel.getInstance();

// TODO: Add UE data using gnbTelemetryModel.addUE()
router.post('/api/gnb/telemetry', async (req, res) => {
    console.log(req.method, req.path)
    const id = await gnbTelemetryModel.add({ ...req.body })
    const row = await gnbTelemetryModel.get(id)
    if (row) {
        row.href = `${req.path}/row.rowID`
        res.status(200).json(row)
    } else {
        res.status(404).send()
    }
})

router.get('/api/gnb/telemetry', async (req, res) => {
    console.log(req.method, req.path)
    const rows = await gnbTelemetryModel.getAll({ ...req.query })
    if (rows) {
        rows.forEach((row) => {
            row.href = `/api/gnb/telemetry/${row.rowId}`
        })
        res.status(200).json(rows)
    }
    else {
        res.status(404).send()
    }
})

router.get('/api/gnb/telemetry/ue', async (req, res) => {
    console.log(req.method, req.path)
    const rows = await gnbTelemetryUeModel.getAll({ ...req.query })
    if (rows) {
        rows.forEach((row) => {
            row.href = `/api/gnb/telemetry/ue/${row.rowId}`
        })
        res.status(200).json(rows)
    } else {
        res.status(404).send()
    }
})

module.exports = router

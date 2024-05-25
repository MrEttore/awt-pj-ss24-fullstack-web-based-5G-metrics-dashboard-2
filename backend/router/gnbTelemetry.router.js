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
    const lastID = await gnbTelemetryModel.add({ ...req.body })

    for (let ueData of req.body.ues) {
        console.log("ueData", ueData)
        await gnbTelemetryUeModel.add({ ...ueData, 'gnbTelemetryRowId': lastID })
    }
    const row = await gnbTelemetryModel.get(lastID)
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

    if (!rows) {
        res.status(404).send()
        return
    }

    for (let row of rows) {
        const telemetryID = row.rowId
        row.ues = await gnbTelemetryUeModel.getAll(
            {
                ...req.query,
                'telemetryId': telemetryID
            }
        )
        row.href = `/api/gnb/telemetry/${telemetryID}`
    }
    res.status(200).json(rows)
})

router.get('/api/gnb/telemetry/:id', async (req, res) => {
    const { id } = req.params
    let row = await gnbTelemetryModel.get(id)
    if (!row) {
        res.status(404).send()
        return
    }

    const telemetryID = row.rowId
    row.ues = await gnbTelemetryUeModel.getAll({
        'telemetryId': telemetryID
    })
    row.href = '/api/gnb/telemetry/' + telemetryID
    res.status(200).json(row)
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

// app.js
const express = require('express');
const sqlite3 = require('sqlite3')
const bodyParser = require('body-parser');
// const MetricsModel = require('./metricsModel');
const GnbTelemetryModel = require('./model/gnbTelemetry.model');

const app = express();
const PORT = process.env.PORT || 3000;

const dbFilePath = 'database.db';
const db = new sqlite3.Database(dbFilePath)
// const metricsModel = new G(dbFilePath);
const gnbTelemetryModel = new GnbTelemetryModel(db)

app.use(bodyParser.json());


app.post('/api/gnb/configuration', (_, res) => {
  console.log("/gnb/configuration endpoint called.");
  res.status(200);
  return;
})

// TODO: Add UE data using gnbTelemetryModel.addUE()
app.post('/api/gnb/telemetry', async (req, res) => {
  console.log(req.method, req.path)
  const id = await gnbTelemetryModel.add({ ...req.body })
  const row = await gnbTelemetryModel.getByID(id)
  if (row) {
    row.href = `${req.path}/row.rowID`
    res.status(200).send(row)
  } else {
    res.status(404).send()
  }
})

app.get('/api/gnb/telemetry', async (req, res) => {
  console.log(req.method, req.path)
  const rows = await gnbTelemetryModel.get({ ...req.query })
  if (rows) {
    rows.forEach((row) => {
      row.href = `/api/gnb/telemetry/${row.rowId}`
    })
    res.status(200).send(rows)
  }
  else {
    res.status(404).send()
  }
})

app.get('/api/gnb/telemetry/ue', async (req, res) => {
  console.log(req.method, req.path)
  const rows = await gnbTelemetryModel.getUE({...req.query})
  if (rows) {
    rows.forEach((row) => {
      row.href = `/api/gnb/telemetry/ue/${row.rowId}`
    })
    res.status(200).send(rows)
  } else {
    res.status(404).send()
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

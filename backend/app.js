// app.js
const express = require('express');
const sqlite3 = require('sqlite3')
const bodyParser = require('body-parser');
// const MetricsModel = require('./metricsModel');


const app = express();
const PORT = process.env.PORT || 3000;

const gnbTelemetryRouter = require('./router/gnbTelemetry.router');
const gnbLogsRouter = require('./router/gnbLogs.router');

// const dbFilePath = 'database.db';
// const db = new sqlite3.Database(dbFilePath)
// const gnbTelemetryModel = new GnbTelemetryModel(db)
// const gnbTelemetryUeModel = new GnbTelemetryUeModel(db)

app.use(bodyParser.json());


app.post('/api/gnb/configuration', (_, res) => {
  console.log("/gnb/configuration endpoint called.");
  res.status(200);
  return;
})

/*
* gnb.telemetry
*/
app.use('/', gnbTelemetryRouter);

/*
/ gnb.logs
*/
app.use('/', gnbLogsRouter);

/*
* gnb.configuration
*/
const gnbConfigurationRouter = require('./router/gnbConfiguration.router');
app.use('/', gnbConfigurationRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

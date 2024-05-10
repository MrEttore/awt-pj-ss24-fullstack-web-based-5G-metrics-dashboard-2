// app.js
const express = require('express');
const bodyParser = require('body-parser');
const MetricsModel = require('./metricsModel');

const app = express();
const PORT = process.env.PORT || 3000;

const dbFilePath = 'database.db';
const metricsModel = new MetricsModel(dbFilePath);

app.use(bodyParser.json());

// Create database tables
metricsModel.createTables((error) => {
  if (error) {
    console.error('Error creating database tables:', error);
    process.exit(1);
  }
  console.log('Database tables created successfully');
});

// GET endpoint to retrieve all metrics
app.get('/metrics', (req, res) => {
  metricsModel.getAllMetrics((err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// POST endpoint to add a new metric
app.post('/metrics', (req, res) => {
  const metricData = req.body;
  metricsModel.addMetric(metricData, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Metric added successfully' });
  });
});

// GET endpoint to retrieve metrics by time interval
app.get('/metricsByTimeInterval', (req, res) => {
  const { startTime, endTime } = req.query;
  metricsModel.getMetricsByTimeInterval(startTime, endTime, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

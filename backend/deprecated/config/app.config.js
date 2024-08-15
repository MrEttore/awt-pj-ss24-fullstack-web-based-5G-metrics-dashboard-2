const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importing cors module
const app = express();
const corsOptions = {
  origin: 'http://localhost:5173', // Allow only the specific frontend origin
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  optionsSuccessStatus: 204,
  credentials: true,
};

app.use(cors(corsOptions));
app.use((req, res, next) => {
  if (req.headers['content-type'] === 'application/json') {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      try {
        req.body = JSON.parse(data);
        next();
      } catch (error) {
        res.status(400).send('Invalid JSON');
      }
    });
  } else {
    next();
  }
});
/*
* Logging middleware
*/
app.use((req, _, next) => {
  console.log(req.method, req.originalUrl)
  next()
})

app.post('/api/gnb/configuration', (_, res) => {
  console.log("/gnb/configuration endpoint called.");
  res.status(200);
  return;
})

/* gnb.telemetryUE */
app.use('/api/gnb/telemetry/ue',
  require('../router/gnb.telemetryUE.router')
);

/* gnb.telemetry */
app.use('/api/gnb/telemetry', 
  require('../router/gnb.telemetry.router')
);

/** gnb.logs */
app.use('/api/gnb/logs', 
  require('../router/gnb.logs.router')
);

/* gnb.configuration */
app.use('/api/gnb/configuration',
  require('../router/gnb.configuration.router')
);

/* cn5g.telemetry */
app.use('/api/cn5g/telemetry', 
  require('../router/cn5g.telemetry.router')
);

module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

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

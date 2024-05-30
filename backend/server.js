const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const gnbTelemetryRouter = require('./router/gnbTelemetry.router');

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

/*
* gnb.telemetry
*/
app.use('/', gnbTelemetryRouter);

/** gnb.logs */
app.use('/api/gnb/logs', 
  require('./router/gnb.logs.router')
);

/** gnb.configuration */
app.use('/api/gnb/configuration',
  require('./router/gnb.configuration.router')
);

/*
 * cn5g.telemetry 
*/
app.use('/api/cn5g/telemetry', 
  require('./router/cn5g.telemetry.router')
);

/* entry point */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

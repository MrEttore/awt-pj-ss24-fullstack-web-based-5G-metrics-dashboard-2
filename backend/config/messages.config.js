const express = require('express');
const bodyParser = require('body-parser');
const swaggerUI = require('swagger-ui-express');

const app = express();

app.use(bodyParser.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup())

/*
* Logging middleware
*/
app.use((req, _, next) => {
  console.log(req.method, req.originalUrl)
  next()
})

app.use('/api/messages', require('../router/messages.router'));

app.use('/api', require('../router/deprecatedRouter'))

module.exports = app;

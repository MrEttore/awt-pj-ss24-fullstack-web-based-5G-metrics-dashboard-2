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

app.use('/api', require('../router/messages.router'));

module.exports = app;

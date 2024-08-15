const express = require('express');
const bodyParser = require('body-parser');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('../swaggerOptions');

const model = require('../model/messages.model');
const { Sqlite3DatabaseAdapter } = require('../database/sqlite3DatabaseAdapter');

const app = express();

app.use(bodyParser.json());

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

/*
* Logging middleware
*/
app.use((req, _, next) => {
  console.log(req.method, req.originalUrl)
  next()
})

app.use('/api/messages', require('../routes/messages.router'));

app.use('/api', require('../routes/deprecatedRouter'))

module.exports.app = app;

module.exports.init = async function() {
    process.env.DB_PATH = process.env.DB_PATH || 'database.db';
    await model.init();
}

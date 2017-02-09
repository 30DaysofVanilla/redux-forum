const express = require('express');
const app = express();
const path = require('path');
const PORT = process.ENV || 8080;
const bodyparser = require('body-parser');
//const db = require('../database/model/postgresDB.js');

// routers //
const userRouter = require('./userRouter');

app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '../client', 'dist' )));
app.use('/api', userRouter);


module.exports = app;


require('dotenv').config();
var express = require('express');
var app = express();
var db = require('./db');
var cors = require('cors');
var FactController = require('./controllers/FactController');

app.use(cors());

app.use('/funFact', FactController);

module.exports = app;

'use strict';
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');

const PORT = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(compression());

app.get('/', function (req, res) {
	res.send('Hello world\n');
});

app.listen(PORT);
console.log(`Listening on ${PORT}`);

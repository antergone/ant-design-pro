'use strict'
var express = require('../..');
var logger = require('morgan');
var path = require('path');
var app = express();

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(3000);

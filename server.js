'use strict'
var express = require('../..');
var logger = require('morgan');
var path = require('path');
var app = express();

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;

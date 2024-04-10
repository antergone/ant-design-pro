const express = require("express");
const proxy = require('express-http-proxy');
const app = express();

app.use('/', proxy('https://home.simonmy.com:20443/api'));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
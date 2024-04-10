const express = require("express");
const proxy = require('express-http-proxy');
const app = express();

app.get("/test", (req, res) => res.send("Express on Vercel"));
app.use('/api', proxies('https://home.simonmy.com:20443/api'));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
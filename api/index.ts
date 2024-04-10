const express = require("express");
const proxy = require('express-http-proxy');
const app = express();

app.get("/test", (req, res) => res.send("Express on Vercel"));

const proxies = {
  '/api': {
    target: 'https://home.simonmy.com:20443/api'
  },

};

for (let key in proxies) {
  app.use(key, proxies(proxy[key]));
}


app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
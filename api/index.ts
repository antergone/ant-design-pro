const express = require("express");
const http_proxy = require('http-proxy-middleware');
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

const proxy = {
  '/api/': {
    target: 'https://home.simonmy.com:20443/api/'
  },

};

for (let key in proxy) {
  app.use(key, http_proxy(proxy[key]));
}


app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
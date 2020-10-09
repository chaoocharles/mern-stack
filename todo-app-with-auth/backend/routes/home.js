const express = require('express');
const route = express.Router();

route.get("/", (req, res) => {
    res.send("Hello World...");
  });

  module.exports = route;
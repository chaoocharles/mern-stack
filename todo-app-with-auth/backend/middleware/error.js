const winston = require('winston');

function error(err, req, res, next){
    winston.error(err.message);

    res.status(500).send('An error occured...')
  }

module.exports = error
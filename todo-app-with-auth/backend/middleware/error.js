function error(err, req, res, next){
    res.status(500).send('An error occured...')
  }

module.exports = error
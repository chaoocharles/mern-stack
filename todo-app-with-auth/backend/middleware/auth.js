const jwt = require ("jsonwebtoken");
require('dotenv').config();

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if(!token) return res.status(401).send("Access denied. No token provided.")

  try{
    const jwtPrivateKey = process.env.TODO_APP_JWT_PRIVATE_KEY;
    const decoded = jwt.verify(token, jwtPrivateKey )
    req.user = decoded;
    next();
  } catch(ex) {
    res.status(400).send('Invalid token.');
  }
}
  
module.exports = auth;
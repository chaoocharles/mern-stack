const jwt = require ("jsonwebtoken")
const bcrypt = require("bcrypt")
const { User } = require("../models/user")
const Joi = require("joi");
const express = require("express");
const router = express.Router();

require('dotenv').config();

router.post("/", async (req, res) => {
    const schema = Joi.object({
      email: Joi.string().min(3).max(200).required().email(),
      password: Joi.string().min(6).max(200).required(),
    });
  
    const { error } = schema.validate(req.body);
  
    if (error)
      return res.status(400).send(error.details[0].message);
  
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Invalid email or password...")
  
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).send("Invalid email or password...")
    
    const jwtPrivateKey = process.env.TODO_APP_JWT_PRIVATE_KEY;
    const jwtToken = jwt.sign({ _id: user._id }, jwtPrivateKey)

    res.send(jwtToken)
  });
  
  module.exports = router;

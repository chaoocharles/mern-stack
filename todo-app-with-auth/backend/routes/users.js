const mongoose = require("mongoose")
const Joi = require("joi");
const express = require("express");
const router = express.Router();

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 30 },
  email: { type: String, required: true, minlength: 3, maxlength: 200, unique: true },
  password: { type: String, required: true, minlength: 3, maxlength: 1024, unique: true },
})

const User = mongoose.model('User', userSchema);

router.post("/", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(3).max(200).required(),
  });

  const { error } = schema.validate(req.body);

  if (error)
    return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already exists.")

  user = new User ({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  await user.save();
  res.send(user);
}); 

module.exports = router;

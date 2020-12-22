const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

require("dotenv").config();

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 30 },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
    unique: true,
  },
  password: { type: String, required: true, minlength: 3, maxlength: 1024 },
});

userSchema.methods.generateAuthToken = function () {
  const jwtPrivateKey = process.env.TODO_APP_JWT_PRIVATE_KEY;
  const token = jwt.sign({ _id: this._id, name: this.name, email: this.email }, jwtPrivateKey);
  return token;
};

const User = mongoose.model("User", userSchema);

exports.User = User;

const cors = require('cors');
const helmet = require("helmet");
const morgan = require("morgan");
const logger = require("./middleware/logger");
const todos = require("./routes/todos");
const home = require("./routes/home");
const express = require("express");
const mongoose = require("mongoose")

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(logger);
app.use(helmet());
app.use(cors())
app.use(morgan("tiny"));
app.use("/api/todos", todos);
app.use("/", home);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

mongoose.connection.once('open', () => {
  console.log("MongoDB connection established...")
})

const todoSchema = new mongoose.Schema({
  name: String,
  author: String,
  isComplete: Boolean,
  date: { type: Date, default: Date.now },
})

const Todo = mongoose.model('Todo', todoSchema);

async function addTodo() {
  const todo = new Todo({
    name: 'create node apis',
    author: 'Chaoo',
    isComplete: false,
  })
  
  const savedTodo = await todo.save();
  console.log(savedTodo)
}

addTodo()

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
   
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
  name: { type: String, required: true, minlength: 3 },
  author: String,
  isComplete: Boolean,
  date: { type: Date, default: Date.now },
})

const Todo = mongoose.model('Todo', todoSchema);

async function addTodo() {
  const todo = new Todo({
    name: null,
    author: 'Chaoo',
    isComplete: false,
  })
  
  try{
    const savedTodo = await todo.save();
    console.log(savedTodo)
  }
  catch(e){
    // for (field in e.errors)
    // console.log(e.errors[field].message)
    console.log(e.message)
  }
}

// addTodo()

async function getTodos(){
 const todos = await Todo
 .find({isComplete: false})
 .limit(5)
 .sort({date: -1})
 .select({name: 1, isComplete: 1, date: 1})
 console.log(todos)
}

async function updateTodo(id) {
  const todo = await Todo.findById(id);

  if (!todo) return;
  todo.set({
    name: "Learn React"
  })

  const updatedTodo = await todo.save();
  console.log(updatedTodo)
}

async function deleteTodo(id) {
  // const todo = await Todo.deleteOne({ _id: id });
  const todo = await Todo.findByIdAndDelete(id);
  console.log(todo)
}

// deleteTodo("5fad0df385410022fc7c5fa5")

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
   
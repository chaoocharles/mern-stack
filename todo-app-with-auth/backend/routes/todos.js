const winston = require("winston");
const auth = require("../middleware/auth");
const { Todo } = require("../models/todo");
const Joi = require("joi");
const express = require("express");
const router = express.Router();

router.get("/", auth, async (req, res, next) => {
  try {
    const todos = await Todo.find().sort({ date: -1 });
    const filteredTodos = todos.filter(todo => todo.uid === req.user._id);
    res.send(filteredTodos);
  } catch (error) {
    res.status(500).send("Error: " + error.message);

    winston.error(error.message);
  }
});

router.post("/", auth, async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(200).required(),
    author: Joi.string().min(3),
    uid: Joi.string(),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const { name, author, isComplete, date, uid } = req.body;

  let todo = new Todo({ name, author, isComplete, date, uid });

  todo = await todo.save();
  res.send(todo);
});

router.put("/:id", auth, async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    author: Joi.string().min(3),
    uid: Joi.string(),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(result.error.details[0].message);

  const todo = await Todo.findById(req.params.id);

  if (!todo) return res.status(404).send("Todo not found...");

  if (todo.uid !== req.user._id)
    return res.status(401).send("Todo update failed. Not authorized...");

  const { name, author, isComplete, date, uid } = req.body;

  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    { name, author, isComplete, date, uid },
    { new: true }
  );

  res.send(updatedTodo);
});

router.patch("/:id", auth, async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) return res.status(404).send("Todo not found...");

  if (todo.uid !== req.user._id)
    return res.status(401).send("Todo check/uncheck failed. Not authorized...");

  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    {
      isComplete: !todo.isComplete,
    },
    {
      new: true,
    }
  );

  res.send(updatedTodo);
});

router.delete("/:id", auth, async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) return res.status(404).send("Todo not found...");

  if (todo.uid !== req.user._id)
    return res.status(401).send("Todo deletion failed. Not authorized...");

  const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

  res.send(deletedTodo);
});

module.exports = router;

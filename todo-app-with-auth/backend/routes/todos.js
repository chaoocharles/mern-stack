const { Todo } = require("../models/todo")
const Joi = require("joi");
const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
  const todos = await Todo
  .find()
  .sort({date: -1})

  res.send(todos);
});

router.get("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) return res.status(404).send("Todo not found...");
  
  res.send(todo);
});

router.post("/", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(200).required(),
    author: Joi.string().min(3),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);

  if (error)
    return res.status(400).send(error.details[0].message);

  let todo = new Todo ({
    name: req.body.name,
    author: req.body.author,
    isComplete: req.body.isComplete,
    date: req.body.date
  });

  todo = await todo.save();
  res.send(todo);
});

router.put("/:id", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    author: Joi.string().min(3),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  });

  const { error} = schema.validate(req.body);

  if (error)
    return res.status(400).send(result.error.details[0].message);

  const todo = await Todo.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    author: req.body.author,
    isComplete: req.body.isComplete,
    date: req.body.date
  }, {
    new: true
  });

  if (!todo) return res.status(404).send("Todo not found...");

  res.send(todo);
});

router.delete("/:id", async(req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id)
  if (!todo) return res.status(404).send("Todo not found...");

  res.send(todo);
});

module.exports = router;

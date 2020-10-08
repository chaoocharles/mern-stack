const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const todos = [
  { id: 2, name: "Learn Js" },
  { id: 3, name: "Learn Node" },
  { id: 4, name: "Learn React" },
];

app.get("/api/todos", (req, res) => {
  res.send(todos);
});

app.get("/api/todos/:id", (req, res) => {
  const todo = todos.find((todo) => todo.id === parseInt(req.params.id));

  if (!todo) return res.status(404).send("Todo not found...");
  res.send(todo);
});

app.post("/api/todos", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  const result = schema.validate(req.body);

  if (result.error)
    return res.status(400).send(result.error.details[0].message);

  const todo = {
    id: todos.length + 2,
    name: req.body.name,
  };
  todos.push(todo);
  res.send(todo);
});

app.put("/api/todos/:id", (req, res) => {
  const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send("Todo not found...");

  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  const result = schema.validate(req.body);

  if (result.error)
    return res.status(400).send(result.error.details[0].message);

  todo.name = req.body.name;
  res.send(todo);
});

app.delete("/api/todos/:id", (req, res) => {
  const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send("Todo not found...");

  const index = todos.indexOf(todo);
  todos.splice(index, 1);

  res.send(todo);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

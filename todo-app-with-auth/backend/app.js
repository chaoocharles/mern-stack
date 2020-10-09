const helmet = require("helmet");
const morgan = require("morgan");
const logger = require("./middleware/logger");
const todos = require("./routes/todos");
const home = require("./routes/home");
const express = require("express");
const app = express();

app.use(express.json());
app.use(logger);
app.use(helmet());
app.use(morgan("tiny"));
app.use("/api/todos", todos);
app.use("/", home);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

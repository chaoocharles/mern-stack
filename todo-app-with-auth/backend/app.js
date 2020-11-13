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
.then(() => console.log("MongoDB connection established..."))
.catch(err => console.error("MongoDB connection failed"))

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
   
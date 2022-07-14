const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const product_feedbacks = require("./routes/add");
const list = require("./routes/list");

const express = require("express");

const app = express();

mongoose
  .connect("mongodb://localhost/product_feedbacks")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use("/api/add", product_feedbacks);
// app.use("/api/list", list);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));

const { List, validate } = require("../models/add");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// router.get("/", async (req, res) => {
//   const feedbacks = await List.find().sort("name");
//   res.send(feedbacks);
// });

module.exports = router;

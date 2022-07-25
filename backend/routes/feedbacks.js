const { Feedback, validate } = require("../models/feedbacks");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const feedbacks = await Feedback.find().sort("name");
  res.send(feedbacks);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let feedback = new Feedback({
    name: req.body.name,
    description: req.body.description,
  });
  feedback = await feedback.save();

  res.send(feedback);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const feedback = await Feedback.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
    },
    { new: true }
  );

  if (!feedback)
    return res
      .status(404)
      .send("The feedback with the given ID was not found.");

  res.send(feedback);
});

router.delete("/:id", async (req, res) => {
  const feedback = await Feedback.findByIdAndRemove(req.params.id);

  if (!feedback)
    return res
      .status(404)
      .send("The feedback with the given ID was not found.");

  res.send(feedback);
});

router.get("/:id", async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);

  if (!feedback)
    return res
      .status(404)
      .send("The feedback with the given ID was not found.");

  res.send(feedback);
});

module.exports = router;

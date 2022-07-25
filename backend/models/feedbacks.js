const Joi = require("joi");
const mongoose = require("mongoose");

const Feedback = mongoose.model(
  "Feedback",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    description: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
  })
);

function validateFeedback(feedback) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    description: Joi.string().min(5).max(50).required(),
  };

  return Joi.validate(feedback, schema);
}

exports.Feedback = Feedback;
exports.validate = validateFeedback;

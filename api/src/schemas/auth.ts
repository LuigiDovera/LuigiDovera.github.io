const mongoose = require("mongoose");
const { Schema } = mongoose;

const auth = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: false,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  last_login: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("series", auth);

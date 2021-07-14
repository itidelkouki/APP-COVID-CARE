// require mongoose
const mongoose = require('mongoose');

// Require Schema from mongoose
const Schema = mongoose.Schema;

// Create the user schema
const doctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

 /* cin: {
    type: Number,
    required: true,
    unique: true,
  },*/
});

module.exports = Doctor = mongoose.model('Doctor', doctorSchema);

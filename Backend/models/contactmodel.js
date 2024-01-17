const mongoose = require('mongoose');

const myModelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phno: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dummy: {
    type: String
  },
  quary: {
    type: String
  }
});

module.exports = mongoose.model('Contacts', myModelSchema);

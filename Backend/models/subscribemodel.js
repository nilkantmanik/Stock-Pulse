const mongoose = require('mongoose');

const myModelSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phno: {
    type: Number,
  },
  email: {
    type: String,
    required: true
  },
  subscriberDate: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Subscribe', myModelSchema);

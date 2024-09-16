const mongoose = require('mongoose');

const readerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 2,
  },
  username: {
    type: String,
    required: true,
    minlength: 5,
  },
});

module.exports = mongoose.model('reader', readerSchema);
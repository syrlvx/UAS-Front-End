const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'user'], // Batasan hanya boleh "admin" atau "user"
    default: 'user'         // Peran default adalah "user"
  }
});

const user = mongoose.model('user', userSchema);

module.exports = user;

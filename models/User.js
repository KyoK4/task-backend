const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true // บังคับว่าชื่อผู้ใช้ห้ามซ้ำกัน
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
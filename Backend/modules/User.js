const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phonenumber: {
    type: Number,
    required: true
  },
  follw: {
    type: Array,
  },
  friends: {
    type: Array,
  },
  profile: {
    type: String,
  }
})

module.exports = mongoose.model("user", Userschema);


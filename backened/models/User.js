
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

  username: {
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
  posts: [
    { type: mongoose.Types.ObjectId, ref: 'Post' }
  ]


}, { timestamps: true });


const User = mongoose.model('User', userSchema);
module.exports = User;

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
  //posts: [mongoose.Types.ObjectId, { ref: 'User' }]


}, { timestamps: true });


const User = mongoose.model('User', userSchema);
module.exports = User;
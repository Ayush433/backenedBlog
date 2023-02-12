const mongoose = require('mongoose');



const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  public_id: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Types.ObjectId, ref: 'User'
  }



}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);
module.exports = Post;

const Post = require('../models/Post');
const User = require('../models/User');
const path = require('path');
const cloudinary = require('cloudinary').v2;


const posts = [
  { id: 1, title: 'hello', detail: 'something' }
];



module.exports.getAllPosts = (req, res) => {

  return res.status(200).json(posts);
}

module.exports.getPostByUser = (req, res) => {
  return res.status(200).json(posts);
}

module.exports.createPost = async (req, res) => {
  const userId = req.userId;
  const { title, detail, image } = req.body;

  try {
    if (!req.files || !req.files.image) {
      return res.status(400).json('please provide image file ');
    }



    const fileName = path.extname(req.files.image.name);
    const extensions = ['.png', '.jpg', '.jpeg'];

    if (!extensions.includes(fileName)) {
      return res.status(400).json('please provide valid image file ');
    }


    cloudinary.config({
      api_key: 'YbnHayJ00pMZjzCnVFrois70iKc',
      api_secret: '316226597746222',
      cloud_name: 'dx5eyrlaf'
    });

    cloudinary.v2.uploader.upload("/home/my_image.jpg", { upload_preset: "sample_pics" }, (error, result) => {
      console.log(result, error);
    });

    // const user = await User.findOne({ _id: userId });

    // if (user) {
    //   const response = await Post.create({
    //     title, detail, imageUrl, public_id,
    //     author: userId
    //   });

    //   user.posts.push(response);
    //   await user.save();
    //   return res.status(201).json(response);
    // } else {
    //   return res.status(401).json({
    //     status: 401,
    //     message: 'you are not authorised'
    //   });
    // }

    return res.status(200).json('hello');

  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }


}


module.exports.updatePost = (req, res) => {

  return res.status(200).json(posts);
}


module.exports.removePost = (req, res) => {
  return res.status(200).json(posts);
}
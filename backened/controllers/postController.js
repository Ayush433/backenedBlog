const Post = require('../models/Post');
const User = require('../models/User');
const path = require('path');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');


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
  const { title, detail } = req.body;

  try {
    if (!req.files || !req.files.image) {
      return res.status(400).json('please provide image file ');
    }

    const file = req.files.image;
    const fileName = path.extname(file.name);
    const extensions = ['.png', '.jpg', '.jpeg'];

    if (!extensions.includes(fileName)) {
      return res.status(400).json('please provide valid image file ');
    }


    file.mv(`./uploads/${file.name}`, (err) => {
      // console.log(err);
    })

    cloudinary.config({
      api_key: '316226597746222',
      api_secret: 'YbnHayJ00pMZjzCnVFrois70iKc',
      cloud_name: 'dx5eyrlaf'
    });

    cloudinary.uploader.upload(`./uploads/${file.name}`, { upload_preset: "sample_pics" }, async (err, result) => {
      if (err) {
        return res.status(401).json({
          status: 401,
          message: `${err.message}`
        });
      } else {
        fs.unlink(`./uploads/${file.name}`, (err) => {

        })

        const user = await User.findOne({ _id: userId });
        const response = await Post.create({
          title,
          detail,
          image: result.secure_url,
          public_id: result.public_id,
          author: userId
        });
        user.posts.push(response);
        await user.save();
        return res.status(201).json(response);
      }

    });




  } catch (err) {
    return res.status(400).json(err);
  }


}


module.exports.updatePost = async (req, res) => {
  const { title, detail, image, post_id } = req.body;
  if (req?.files || req?.files?.image) {
    return res.status(400).json('please provide image file ');
  } else {

    try {

      await Post.findByIdAndUpdate({ _id: post_id }, {
        title,
        detail
      });

      return res.status(200).json('successfully updated');

    } catch (err) {

      return res.status(400).json('something went wrong');
    }


  }
}




module.exports.removePost = async (req, res) => {
  const { post_id, public_id } = req.body;

  try {

    cloudinary.config({
      api_key: '316226597746222',
      api_secret: 'YbnHayJ00pMZjzCnVFrois70iKc',
      cloud_name: 'dx5eyrlaf'
    });

    const response = await cloudinary.uploader.destroy(public_id);
    if (response.result === 'not found') {
      return res.status(400).json(response);
    } else {
      await Post.findByIdAndDelete({ _id: post_id });
      return res.status(200).json('successfully removed');
    }

  } catch (err) {
    return res.status(400).json(err);
  }



}
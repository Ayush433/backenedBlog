const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const auth = require('../middleware/check_auth')

const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});

const postSchema = Joi.object({
  // title: Joi.string().required().min(15).max(40),
  // detail: Joi.string().required().min(150).max(1000),
  title: Joi.string().required(),
  detail: Joi.string().required(),
  imageUrl: Joi.string().required(),
  public_id: Joi.string().required(),
});


const noAllow = (req, res) => res.status(405).json({
  status: 405,
  message: 'method not allowed'
});

router.get('/', postController.getAllPosts);

router.route('/api/createPost').post(auth.checkAuth, validator.body(postSchema), postController.createPost).all(noAllow);
router.patch('/api/update/post/:id', auth.checkAuth, postController.updatePost);
router.get('/api/getPostUser', auth.checkAuth, postController.getPostByUser);
router.delete('/api/remove/post/:id', auth.checkAuth, postController.removePost);



module.exports = router;

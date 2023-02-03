const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5).max(20)
});


router.post('/api/userLogin', validator.body(loginSchema), userController.userLogin);
router.post('/api/userSignUp');


module.exports = router;



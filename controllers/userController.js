const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');





module.exports.userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const isExistUser = await User.findOne({ email: email });

    if (isExistUser) {
      const isValidPassword = await bcrypt.compareSync(password, isExistUser.password);
      if (isValidPassword) {
        const token = jwt.sign({ id: isExistUser._id }, 'tokenGenerate');
        return res.status(200).json({
          status: 200,
          data: {
            id: isExistUser._id,
            username: isExistUser.username,
            email: isExistUser.email,
            token
          }
        });
      } else {
        return res.status(401).json({
          status: 401,
          message: 'invalid credential'
        });
      }

    }

    return res.status(400).json({
      status: 400,
      message: 'user not found'
    })
  } catch (err) {
    return res.status(400).json(err)
  }



}


module.exports.userSignUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const isExistUser = await User.findOne({ email: email });

    if (isExistUser) {
      return res.status(400).json({
        status: 422,
        message: 'user already exist'
      });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await User.create({
      username,
      email,
      password: hashedPassword
    });
    return res.status(201).json({
      status: 201,
      message: 'user successfully registered'
    })
  } catch (err) {
    return res.status(400).json(err)
  }







}
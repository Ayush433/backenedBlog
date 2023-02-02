const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController')


router.get('/', postController.getData);

router.get('/post/:id', postController.getDataById);



module.exports = router;



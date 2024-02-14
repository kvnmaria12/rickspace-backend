const express = require('express');
const getPostsController = require('../../controller/get-posts/get-posts.controller');
const router = express.Router();

router.post('/all-posts', getPostsController);

module.exports = router;

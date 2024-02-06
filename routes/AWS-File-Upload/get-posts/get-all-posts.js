const express = require('express');
const getPostsController = require('../../../controller/AWS-File-Upload/get-posts/get-posts.controller');
const router = express.Router();

router.post('/all-posts', getPostsController);

module.exports = router;

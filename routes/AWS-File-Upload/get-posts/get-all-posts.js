const express = require('express');
const getPostsController = require('../../../controller/AWS-File-Upload/get-posts/get-posts.controller');
const router = express.Router();
const getAllFileValidator = require('../../../validators/AWS/getFile/get-file');

router.post('/all-posts', getPostsController);

module.exports = router;

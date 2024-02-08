const express = require('express');
const router = express.Router();
const savePostController = require('../../controller/save-post/save-post.controller');

router.post('/save-post', savePostController);

module.exports = router;

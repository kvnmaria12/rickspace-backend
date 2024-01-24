const express = require('express');
const router = express.Router();
const commentsController = require('../../controller/comments/comments.controller');

router.post('/add-comment', commentsController);

module.exports = router;

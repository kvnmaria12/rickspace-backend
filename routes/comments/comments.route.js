const express = require('express');
const router = express.Router();
const addCommentController = require('../../controller/comments/add-comment/add-comment.controller');
const updateCommentController = require('../../controller/comments/update-comment/update-comment.controller');
const commentValidator = require('../../validators/Comment/comment');

router.post('/add-comment', commentValidator, addCommentController);
router.post('/update-comment', commentValidator, updateCommentController);
router.delete('/delet-comment', commentValidator);
module.exports = router;

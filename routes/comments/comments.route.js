const express = require('express');
const router = express.Router();
const addCommentController = require('../../controller/comments/add-comment/add-comment.controller');
const updateCommentController = require('../../controller/comments/update-comment/update-comment.controller');
const commentValidator = require('../../validators/Comment/comment');
const deleteCommentController = require('../../controller/comments/delete-comment/delete-comment.controller');

router.post('/add-comment', commentValidator, addCommentController);
router.post('/update-comment', commentValidator, updateCommentController);
router.delete('/delete-comment', deleteCommentController);
module.exports = router;

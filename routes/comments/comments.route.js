const express = require('express');
const router = express.Router();
const addCommentController = require('../../controller/comments/add-comment/add-comment.controller');
const updateCommentController = require('../../controller/comments/update-comment/update-comment.controller');
const commentValidator = require('../../validators/Comment/add-comment');
const deleteCommentController = require('../../controller/comments/delete-comment/delete-comment.controller');
const updateCommentValidator = require('../../validators/Comment/update-comment');

router.post('/add-comment', commentValidator, addCommentController);
router.post('/update-comment', updateCommentValidator, updateCommentController);
router.delete('/delete-comment', deleteCommentController);
module.exports = router;

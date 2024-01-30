const express = require('express');
const router = express.Router();
const addCommentController = require('../../controller/comments/add-comment/add-comment.controller');
const updateCommentController = require('../../controller/comments/update-comment/update-comment.controller');

router.post('/add-comment', addCommentController);
router.post('/update-comment', updateCommentController);
router.delete('/delet-comment/:id');
module.exports = router;

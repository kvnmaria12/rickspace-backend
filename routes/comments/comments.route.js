const express = require('express');
const router = express.Router();
const addController = require('../../controller/comments/add-comment/add-comment.controller');
const updateController = require('../../controller/comments/update-comment/update-comment.controller');
const commentValidator = require('../../validators/Comment/comment');
const deleteController = require('../../controller/comments/delete-comment/delete-comment.controller');
const getAllController = require('../../controller/comments/all-comments/all-comments.controller');

router.post('/add-comment', commentValidator, addController);
router.post('/update-comment', commentValidator, updateController);
router.delete('/delete-comment/', deleteController);
router.post('/all-comments', getAllController);

module.exports = router;

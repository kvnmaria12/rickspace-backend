const express = require('express');
const likeController = require('../../controller/like/like.controller');
const router = express.Router();

router.post('/like', likeController);

module.exports = router;

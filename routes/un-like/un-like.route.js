const express = require('express');
const unLikeController = require('../../controller/un-like/un-like.controller');
const router = express.Router();

router.post('/un-like', unLikeController);

module.exports = router;

const express = require('express');
const unLikeController = require('../../controller/dis-like/dis-like.controller');
const router = express.Router();

router.post('/dis-like', unLikeController);

module.exports = router;

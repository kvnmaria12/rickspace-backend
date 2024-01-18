const express = require('express');
const unFollowController = require('../../controller/un-follow/un-follow.controller');
const router = express.Router();

router.post('/unfollow-user', unFollowController);

module.exports = router;

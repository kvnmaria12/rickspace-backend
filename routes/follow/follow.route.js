const express = require('express');
const router = express.Router();
const followController = require('../../controller/follow/follow.controller');

router.post('/follow-user', followController);

module.exports = router;

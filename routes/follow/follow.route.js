const express = require('express');
const followController = require('../../controller/follow/follow.controller');
const router = express.Router();

router.post('/follow-user', followController);

module.exports = router;

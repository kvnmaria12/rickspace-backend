const express = require('express');
const router = express.Router();
const allUsersController = require('../../controller/all-users/all-users.controller');

router.get('/all-users', allUsersController);

module.exports = router;

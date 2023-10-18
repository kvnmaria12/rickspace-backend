const express = require('express');
const router = express.Router();

const userController = require('../../controller/user/user.controller');

// routing

router.post('/signup', userController.signUp);

module.exports = router;

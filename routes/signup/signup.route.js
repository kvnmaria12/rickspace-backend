const express = require('express');
const router = express.Router();

const userController = require('../../controller/signup/signup.controller');

// routing
router.post('/auth/signup', userController.signUp);

module.exports = router;

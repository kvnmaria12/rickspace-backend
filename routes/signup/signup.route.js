const express = require('express');
const router = express.Router();

const signUpController = require('../../controller/signup/signup.controller');

// routing
router.post('/signup', signUpController);

module.exports = router;

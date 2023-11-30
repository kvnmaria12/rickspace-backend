const express = require('express');
const router = express.Router();
const loginController = require('../../controller/auth/login.controller');

router.post('/login', loginController);

module.exports = router;

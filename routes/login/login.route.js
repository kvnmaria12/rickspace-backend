const express = require('express');
const router = express.Router();
const loginController = require('../../controller/login/login.controller');

router.post('/login', loginController);

module.exports = router;

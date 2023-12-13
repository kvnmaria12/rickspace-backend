const express = require('express');
const resetPassword = require('../../controller/reset-password/reset-password.controller');
const validator = require('../../validators/Authentication/Reset-Password/reset-password');
const router = express.Router();

router.post('/reset-password', validator, resetPassword);

module.exports = router;

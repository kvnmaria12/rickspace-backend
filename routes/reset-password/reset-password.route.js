const express = require('express');
const resetPassword = require('../../controller/reset-password/reset-password.controller');
const router = express.Router();

router.post('/reset-password', resetPassword);

module.exports = router;

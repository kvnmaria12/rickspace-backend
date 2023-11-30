const express = require('express');
const sendOTP = require('../../controller/otp/sendOTP.controller');
const verifyOPT = require('../../controller/otp/sendOTP.controller');

const router = express.Router();

router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOPT);

module.exports = router;

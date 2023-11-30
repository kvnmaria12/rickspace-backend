const sendOTPService = require('../../services/otp/sendOTP.services');

const sendOTP = async (req, res) => {
  try {
    sendOTPService(req, res);
  } catch (error) {
    console.log('error', error);
  }
};

module.exports = sendOTP;

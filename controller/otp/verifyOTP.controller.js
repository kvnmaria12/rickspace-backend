const verifyOTPService = require('../../services/otp/verifyOTP.services');

const verifyOTP = async (req, res) => {
  try {
    verifyOTPService(req, res);
  } catch (error) {
    console.log('error', error);
  }
};

module.exports = verifyOTP;

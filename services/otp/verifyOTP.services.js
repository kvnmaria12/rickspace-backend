const { serviceSid } = require('../../utils/twilio-env');

const twilioClient = require('../../utils/twilio-client');

const verifyOTP = async (req, res) => {
  const { phoneNumber, otp } = req.body;

  try {
    const verifyOTP = await twilioClient.verify.v2
      .services(serviceSid)
      .verificationChecks.create({
        to: `+${phoneNumber}`,
        code: otp,
      });

    const { status, valid } = verifyOTP;

    if (status == 'pending') {
      return res.status(401).json({ message: 'Invalid OTP' });
    }
    if (status == 'approved') {
      return res.status(200).json({ Message: 'OTP Successfully Validated' });
    }
  } catch (error) {
    console.log('error');
    return res.status(500).json({ message: error?.message });
  }
};

module.exports = verifyOTP;

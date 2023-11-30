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

    if (status == 'approved') {
      res.status(200).json({ Message: 'OTP Successfully Validated' });
    }
  } catch (error) {
    console.log('error');
    res.status(400).json({ Message: 'Invalid OTP' });
    // res.status(500).json({ error: error });
  }
};

module.exports = verifyOTP;

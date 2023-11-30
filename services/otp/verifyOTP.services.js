const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const VERIFY_SERVICE_SID = process.env.VERIFY_SERVICE_SID;

const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, {
  lazyLoading: true,
});

const verifyOTP = async (req, res) => {
  const { phoneNumber, otp } = req.body;

  try {
    const verifyOTP = await client.verify.v2
      .services(VERIFY_SERVICE_SID)
      .verificationChecks.create({
        to: `+${phoneNumber}`,
        code: otp,
      });

    const { status, valid } = verifyOTP;

    if (status == 'approved') {
      res.status(200).json({ Message: 'OTP Successfully Validated' });
    }

    console.log('verifyOTP', verifyOTP);
  } catch (error) {
    console.log('error');
    res.status(400).json({ Message: 'Invalid OTP' });
    // res.status(500).json({ error: error });
  }
};

module.exports = verifyOTP;

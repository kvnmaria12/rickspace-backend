const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const VERIFY_SERVICE_SID = process.env.VERIFY_SERVICE_SID;

const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, {
  lazyLoading: true,
});

const sendOTP = async (req, res) => {
  const { phoneNumber } = req.body;
  try {
    await client.verify.v2
      .services(VERIFY_SERVICE_SID)
      .verifications.create({ to: `+${phoneNumber}`, channel: 'sms' })
      .then((verfications) => {
        res.status(200).json({ success: 'OTP sent successfully' });
      });
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
};

module.exports = sendOTP;

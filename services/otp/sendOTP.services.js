const { serviceSid } = require('../../utils/twilio-env');

const twilioClient = require('../../utils/twilio-client');

const sendOTP = async (req, res) => {
  const { phoneNumber } = req.body;
  try {
    await twilioClient.verify.v2
      .services(serviceSid)
      .verifications.create({ to: `+${phoneNumber}`, channel: 'sms' })
      .then((verfications) => {
        res.status(200).json({ success: 'OTP sent successfully' });
      });
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
};

module.exports = sendOTP;

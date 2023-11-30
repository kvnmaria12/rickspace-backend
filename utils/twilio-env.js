const dotenv = require('dotenv');

dotenv.config();

const accessToken = process.env.ACCESS_TOKEN_SECRET;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.VERIFY_SERVICE_SID;

module.exports = { accessToken, accountSid, authToken, serviceSid };

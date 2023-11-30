const { accountSid, authToken } = require('./twilio-env');

const client = require('twilio')(accountSid, authToken, {
  lazyLoading: true,
});

module.exports = client;

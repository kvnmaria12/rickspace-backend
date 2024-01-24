const { rateLimit } = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 180000, // 1minute
  max: 30, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: (req, res) => {
    return res
      .status(429)
      .json({ message: 'Too many request. Please try again' });
  },
});

module.exports = limiter;

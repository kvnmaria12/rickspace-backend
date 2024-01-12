const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];
  const token = authorizationHeader && authorizationHeader.split(' ')[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({
        message: 'Not Authenticated',
      });
    }

    next();
  });
};

module.exports = { authenticateToken };

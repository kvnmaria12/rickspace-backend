const loginService = require('../../services/login/login.services');

const login = async (req, res) => {
  try {
    const responseData = await loginService(req);
    if (responseData == 'No_user_found') {
      res.status(409).json({ message: 'No User Found' });
    } else if (responseData == 'wrong_password') {
      res.status(409).json({ message: 'Wrong Password' });
    } else {
      res.status(200).json({
        message: 'SUCCESS',
        token: responseData.token,
        responseData,
      });
    }
  } catch (error) {
    res.json({
      message: error?.message,
    });
  }
};

module.exports = login;

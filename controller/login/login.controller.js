const loginService = require('../../services/login/login.services');

const login = async (req, res) => {
  try {
    const responseData = await loginService(req);
    const { name, email, mobileNo } = responseData[0];

    if (responseData == 'No_user_found') {
      res.status(409).json({ message: 'No User Found' });
    } else if (responseData == 'wrong_password') {
      res.status(409).json({ message: 'Wrong Password' });
    } else {
      res.status(200).json({
        message: 'SUCCESS',
        token: responseData.token,
        results: { name, email, mobileNo },
      });
    }
  } catch (error) {
    res.json({
      message: error?.message,
    });
  }
};

module.exports = login;

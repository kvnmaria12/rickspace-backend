const loginService = require('../../services/auth/login.services');
const sendResponse = require('../../functions/response');

exports.login = async (req, res) => {
  try {
    let responseData = {};
    const response = await loginService.login(req);

    if (response == 'No_user_found') {
      responseData.statusCode = 409;
      responseData.responseCode = 'NO_USER_FOUND';
      responseData.message = 'FAILED';
    } else {
      responseData.statusCode = 200;
      responseData.responseCode = 'USER_FOUND';
      responseData.message = 'SUCCESS';
    }

    sendResponse.sendResponseObj(
      responseData.statusCode,
      responseData.responseCode,
      responseData.message,
      res
    );
  } catch (error) {
    res.json({
      message: 'Error',
    });
  }
};

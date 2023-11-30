const loginService = require('../../services/auth/login.services');
const sendResponse = require('../../functions/response');

const login = async (req, res) => {
  try {
    let response = {};
    const responseData = await loginService(req);

    if (responseData == 'No_user_found') {
      response.statusCode = 409;
      response.responseCode = 'NO_USER_FOUND';
      response.message = 'FAILED';
    } else if (responseData == 'wrong_password') {
      response.statusCode = 409;
      response.responseCode = 'WRONG_PASSWORD';
      response.message = 'FAILED';
    } else {
      response.statusCode = 200;
      response.responseCode = 'USER_FOUND';
      response.message = 'SUCCESS';
      response.data = responseData.token;
    }
    sendResponse.sendResponseObj(
      response.statusCode,
      response.responseCode,
      response.message,
      response.data,
      res
    );
  } catch (error) {
    res.json({
      message: error?.message,
    });
  }
};

module.exports = login;

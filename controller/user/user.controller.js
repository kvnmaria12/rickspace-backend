const userServices = require('../../services/user/user.services');
const sendResponse = require('../../functions/response');
// mainly used to response

exports.signUp = async (req, res) => {
  try {
    let response = {};
    let responseData = await userServices.registrationServie(req);

    console.log(responseData);

    if (responseData == 'User_email_key') {
      response.statusCode = 409;
      response.responseCode = 'USER_EMAIL_EXISTS';
      response.message = 'FAILED';
    } else if (responseData == 'User_mobileNo_key') {
      response.statusCode = 409;
      response.responseCode = 'USER_MOBILENO_EXISTS';
      response.message = 'FAILED';
    } else {
      response.statusCode = 200;
      response.responseCode = 'USER_REGISTERED';
      response.message = 'SUCCESS';
      response.data = responseData;
    }
    sendResponse.sendResponseObj(
      response.statusCode,
      response.responseCode,
      response.message,
      res,
      response.data
    );
  } catch (error) {
    sendResponse.sendResponseObj(
      error.statusCode ? error.statusCode : 500,
      error.errorCode ? error.errorCode : 'ERROR',
      '',
      res,
      error.message ? error.message : ''
    );
  }
};

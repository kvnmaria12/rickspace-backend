const signUpApi = require('../routes/signup/signup.route');
const loginApi = require('../routes/login/login.route');
const otpRoute = require('../routes/otp/otp.route');
const postRoute = require('../routes/AWS-File-Upload/file-upload/file-upload.route');
const getAllPostRoute = require('../routes/AWS-File-Upload/get-posts/get-all-posts');
const restPasswordRoute = require('../routes/reset-password/reset-password.route');
const followRoute = require('../routes/follow/follow.route');
module.exports = {
  signUpApi,
  loginApi,
  otpRoute,
  postRoute,
  getAllPostRoute,
  restPasswordRoute,
  followRoute,
};

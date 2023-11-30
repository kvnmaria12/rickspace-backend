const loginRepository = require('../../repository/auth/login.repo');
const Common = require('../../functions/common');
const jwt = require('jsonwebtoken');

const common = new Common();

const login = async (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { password } = req.body;
      const repoResponse = await loginRepository.loginRepo(req);
      // console.log('repoResponse', repoResponse);

      if (Array.isArray(repoResponse)) {
        const { email, name, mobileNo } = repoResponse[0];

        const token = jwt.sign(
          { email, name, mobileNo },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '4h' }
        );

        repoResponse.token = token;

        const isPasswordEqual = await common.comparePassword(
          password,
          repoResponse[0].password
        );
        if (isPasswordEqual) {
          resolve(repoResponse);
        } else {
          resolve('wrong_password');
        }
      } else {
        resolve(repoResponse);
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = login;

const loginRepository = require('../../repository/login/login.repo');
const Common = require('../../functions/common');
const jwt = require('jsonwebtoken');

const common = new Common();

const login = async (req) => {
  try {
    const { password } = req.body;
    const repoResponse = await loginRepository.loginRepo(req);

    if (Array.isArray(repoResponse)) {
      const { email, id, password: dbPassword } = repoResponse[0];

      const token = jwt.sign({ email, id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '4h',
      });

      repoResponse.token = token;

      const isPasswordEqual = await common.comparePassword(
        password,
        dbPassword
      );
      if (isPasswordEqual) {
        return repoResponse;
      } else {
        return 'wrong_password';
      }
    } else {
      return repoResponse;
    }
  } catch (error) {
    return error;
  }
};

module.exports = login;

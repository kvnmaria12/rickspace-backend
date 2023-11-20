const loginRepository = require('../../repository/auth/login.repo');
const Common = require('../../functions/common');

const common = new Common();

exports.login = async (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { password } = req.body;
      // const hashedPassword = await common.hashPassword(password, 11);
      // console.log(hashedPassword);
      const repoResponse = await loginRepository.loginRepo(req);
      console.log('password', password);
      if (repoResponse) {
        const isPasswordEqual = await common.comparePassword(
          password,
          repoResponse[0].password
        );
        console.log('isPasswordEqual', isPasswordEqual);
        resolve(repoResponse);
      }
    } catch (error) {
      reject(error);
      console.log(error);
    }
  });
};

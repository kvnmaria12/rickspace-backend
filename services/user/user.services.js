const userRepo = require('../../repository/user/user.repo');
const Common = require('../../functions/common');

const common = new Common();

// functionality
// token generation

exports.registrationServie = async (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      userData = req.body;
      userData.password = req.body.password
        ? await common.hashPassword(req.body.password, 11)
        : null;
      let insertResponse = await userRepo.userRegistration(userData);
      resolve(insertResponse);
    } catch (error) {
      console.log(error);
    }
  });
};

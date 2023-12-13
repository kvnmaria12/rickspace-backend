const resetPasswordRepo = require('../../repository/reset-password/reset-password.repo');
const Common = require('../../functions/common');
const logger = require('../../utils/logger');

const common = new Common();

const resetPasswordService = async (req) => {
  try {
    let { password } = req.body;
    const hashPassword = await common.hashPassword(password, 11);
    req.body.password = hashPassword;
    const repoResponse = await resetPasswordRepo(req);
    return repoResponse;
  } catch (error) {
    logger.error(`resetPasswrdSrvice ---> ${error}`);
  }
};

module.exports = resetPasswordService;

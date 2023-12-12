const resetPasswordRepo = require('../../repository/reset-password/reset-password.repo');
const logger = require('../../utils/logger');

const resetPasswordService = async (req) => {
  try {
    const repoResponse = await resetPasswordRepo(req);
  } catch (error) {
    logger.warn(`resetPasswrdSrvice ---> ${error}`);
  }
};

module.exports = resetPasswordService;

const resetPasswordService = require('../../services/reset-password/reset-password.services');
const logger = require('../../utils/logger');

const resetPassword = async (req, res) => {
  try {
    const response = await resetPasswordService(req);
  } catch (error) {
    logger.warn(`rest-password-cntrl ---> ${error}`);
  }
};

module.exports = resetPassword;

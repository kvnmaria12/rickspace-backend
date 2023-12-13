const resetPasswordService = require('../../services/reset-password/reset-password.services');
const logger = require('../../utils/logger');
const { validationResult } = require('express-validator');

const resetPassword = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const response = await resetPasswordService(req);
      if (response) {
        return res
          .status(200)
          .json({ message: 'Password Updated Successfully' });
      }
    } else {
      return res.status(412).json({ error: errors.array()?.[0].msg });
    }
  } catch (error) {
    logger.warn(`rest-password-cntrl ---> ${error}`);
    return res.status(500).json({ message: error?.message });
  }
};

module.exports = resetPassword;

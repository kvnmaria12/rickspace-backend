const logger = require('../../utils/logger');
const primsa = require('../../utils/prisma-client');

const resetPasswordRepo = async (req) => {
  try {
    const { mobileNo, password } = req.body;

    const updatePassword = await primsa.user.update({
      where: {
        mobileNo: mobileNo,
      },
      data: {
        password: password,
      },
    });
    return updatePassword;
  } catch (error) {
    logger.warn(`resetPasswrdRepo --> ${error}`);
  }
};

module.exports = resetPasswordRepo;

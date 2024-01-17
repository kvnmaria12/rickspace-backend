const { get } = require('../../routes/reset-password/reset-password.route');
const logger = require('../../utils/logger');
const primsa = require('../../utils/prisma-client');

const resetPasswordRepo = async (req) => {
  try {
    const { mobileNo, password } = req.body;

    const getMobileNo = await primsa.user.findUnique({
      where: {
        mobileNo: mobileNo,
      },
    });

    if (!getMobileNo) {
      return undefined;
    }
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
    logger.warn(`resetPasswrdRepo --> ${error.message}`);
  }
};

module.exports = resetPasswordRepo;

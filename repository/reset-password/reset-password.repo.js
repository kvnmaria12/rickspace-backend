const logger = require('../../utils/logger');
const prisma = require('../../utils/prisma-client');

const resetPasswordRepo = async (req) => {
  try {
    const { mobileNo, password } = req.body;

    const getMobileNo = await prisma.user.findUnique({
      where: {
        mobileNo: mobileNo,
      },
    });

    if (!getMobileNo) {
      return undefined;
    }
    const updatePassword = await prisma.user.update({
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

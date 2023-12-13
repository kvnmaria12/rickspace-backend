const logger = require('../../utils/logger');
const primsa = require('../../utils/prisma-client');

const resetPasswordRepo = async (req) => {
  try {
    const { id, password } = req.body;

    const updatePassword = await primsa.user.update({
      where: {
        id: id,
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

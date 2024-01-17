const primsa = require('../../utils/prisma-client');
const logger = require('../../utils/logger');

const followRepo = async (req) => {
  try {
    const { userId, followerId } = req.body;
    const response = await primsa.user.update({
      where: {
        id: userId,
      },
      data: {
        following: {
          push: followerId,
        },
      },
    });
    if (response) {
      return response;
    }
  } catch (error) {
    return error;
    logger.warn(`resetPasswrdRepo --> ${error.message}`);
  }
};

module.exports = followRepo;

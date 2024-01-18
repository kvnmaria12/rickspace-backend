const logger = require('../../utils/logger');
const primsa = require('../../utils/prisma-client');

const unFollowRepository = async (req) => {
  try {
    const { userId, followerId } = req.body;

    const users = await primsa.user.findUnique({
      where: {
        id: userId,
      },
    });

    const updateUsers = users.following.filter((data) => data != followerId);

    const updateDb = await primsa.user.update({
      where: {
        id: userId,
      },
      data: {
        following: updateUsers,
      },
    });
    return updateDb;
  } catch (error) {
    logger.warn(`unFollowRepo--> ${error?.message}`);
    return error;
  }
};

module.exports = unFollowRepository;

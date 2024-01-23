const logger = require('../../utils/logger');
const primsa = require('../../utils/prisma-client');

const unFollowRepository = async (req) => {
  try {
    const { userId, followerId } = req.body;
    const users = await primsa.followers.findMany({
      where: {
        authorId: userId,
      },
    });
    const filteredUsers = users.filter((user) => user.followerId == followerId);
    const { id } = filteredUsers[0];
    const deleteFollower = await primsa.followers.delete({
      where: {
        id: id,
      },
    });
    return deleteFollower;
  } catch (error) {
    logger.warn(`unFollowRepo--> ${error?.message}`);
    return error;
  }
};

module.exports = unFollowRepository;

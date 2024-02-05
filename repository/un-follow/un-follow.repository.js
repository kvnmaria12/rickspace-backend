const logger = require('../../utils/logger');
const prisma = require('../../utils/prisma-client');

const unFollowRepository = async (req) => {
  try {
    const { userId, postId } = req.body;
    const users = await prisma.followers.findMany({
      where: {
        authorId: userId,
      },
    });

    const getUserId = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    const { authorId: followerId } = getUserId;

    const filteredUsers = users.filter((user) => user.followerId == followerId);
    const { id } = filteredUsers[0];
    const deleteFollower = await prisma.followers.delete({
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

const logger = require('../../utils/logger');
const prisma = require('../../utils/prisma-client');

const followRepo = async (req) => {
  try {
    const { authorId, postId, userId } = req.query;

    let getUserId;
    if (!userId) {
      getUserId = await prisma.post.findUnique({
        where: {
          id: postId,
        },
      });
    }

    let dbResponse;

    if (typeof getUserId == 'object' && !Array.isArray(getUserId)) {
      const { authorId: followerId } = getUserId;
      dbResponse = await prisma.followers.create({
        data: {
          authorId: authorId,
          followerId: followerId,
        },
      });
    } else {
      dbResponse = await prisma.followers.create({
        data: {
          authorId: authorId,
          followerId: userId,
        },
      });
    }

    return dbResponse;
  } catch (error) {
    logger.warn(`resetPasswrdRepo --> ${error.message}`);
    return error?.message;
  }
};

module.exports = followRepo;

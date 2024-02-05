const logger = require('../../utils/logger');
const prisma = require('../../utils/prisma-client');

const followRepo = async (req) => {
  try {
    const { authorId, postId } = req.body;

    const getUserId = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    const { authorId: followerId } = getUserId;

    const dbResponse = await prisma.followers.create({
      data: {
        authorId: authorId,
        followerId: followerId,
      },
    });

    return dbResponse;
  } catch (error) {
    logger.warn(`resetPasswrdRepo --> ${error.message}`);
    return error?.message;
  }
};

module.exports = followRepo;

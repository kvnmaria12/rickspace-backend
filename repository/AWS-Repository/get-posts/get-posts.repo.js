const { PrismaClient } = require('@prisma/client');
const logger = require('../../../utils/logger');

const prisma = new PrismaClient();

const getAllPostsRepo = async (req) => {
  try {
    const { userId } = req.body;
    const userInfo = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        following: true,
      },
    });

    if (userId) {
      let followersIds;
      followersIds = userInfo.following.map((follower) => follower.followerId);

      const followersPost = await prisma.post.findMany({
        where: {
          authorId: { in: followersIds },
        },
      });
      return followersPost;
    }
  } catch (error) {
    logger.error('error from get-post-repo --->', error);
    return error?.code;
  }
};

module.exports = getAllPostsRepo;

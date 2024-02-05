const logger = require('../../../utils/logger');
const prisma = require('../../../utils/prisma-client');

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

      const followersPosts = await prisma.post.findMany({
        where: {
          authorId: { in: followersIds },
        },
        include: {
          likes: true,
          comments: true,
        },
      });

      const updatedFollowersPosts = followersPosts.map((post) => ({
        ...post,
        isFollowed: true,
      }));

      return updatedFollowersPosts;
    }
  } catch (error) {
    logger.error('error from get-post-repo --->', error);
    return error?.code;
  }
};

module.exports = getAllPostsRepo;

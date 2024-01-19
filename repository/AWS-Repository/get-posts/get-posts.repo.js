const { PrismaClient } = require('@prisma/client');
const logger = require('../../../utils/logger');

const prisma = new PrismaClient();

const getAllPostsRepo = async (req) => {
  try {
    const { authorId } = req.body;
    const posts = await prisma.post.findMany({
      where: {
        authorId: authorId,
      },
      include: {
        likes: true,
      },
    });
    return posts;
  } catch (error) {
    logger.error('error from get-post-repo --->', error);
    return error?.code;
  }
};

module.exports = getAllPostsRepo;

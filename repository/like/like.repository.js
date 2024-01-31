const logger = require('../../utils/logger');
const prisma = require('../../utils/prisma-client');

const likeRepo = async (req) => {
  try {
    const { authorId, postId } = req.body;

    const response = await prisma.likes.create({
      data: {
        postId: postId,
        authorId: authorId,
        likeCount: 1,
      },
    });
    return response;
  } catch (error) {
    logger.warn(`likeRepo --> ${error.message}`);
    return error?.message;
  }
};

module.exports = likeRepo;

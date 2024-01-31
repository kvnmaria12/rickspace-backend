const logger = require('../../../utils/logger');
const prisma = require('../../../utils/prisma-client');

const addCommetRepo = async (req) => {
  try {
    const { postId, authorId, comment } = req.body;

    const addComments = await prisma.comments.create({
      data: {
        postId: postId,
        authorId: authorId,
        comment: comment,
      },
    });

    return addComments;
  } catch (error) {
    logger.warn(`commentsRepo -> ${error?.message}`);
    return error?.message;
  }
};

module.exports = addCommetRepo;

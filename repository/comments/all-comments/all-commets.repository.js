const logger = require('../../../utils/logger');
const prisma = require('../../../utils/prisma-client');

const getAllCommentsRepo = async (req) => {
  try {
    const { postId } = req.body;

    const reponse = await prisma.comments.findMany({
      where: {
        postId: postId,
      },
    });
    return reponse;
  } catch (error) {
    logger.warn(`getAllCommentRepo ${error?.message}`);
    return error?.message;
  }
};

module.exports = getAllCommentsRepo;

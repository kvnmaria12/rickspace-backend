const logger = require('../../../utils/logger');
const prisma = require('../../../utils/prisma-client');

const deleteCommentRepo = async (req) => {
  try {
    const { authorId, postId } = req.body;
    const deleteComment = await prisma.comments.delete({
      where: {
        postId: postId,
        AND: [
          {
            authorId: authorId,
          },
        ],
      },
    });
    console.log(deleteComment);
  } catch (error) {
    logger.warn(`deleteCommentRepo ${error?.message}`);
    return error?.message;
  }
};

module.exports = deleteCommentRepo;

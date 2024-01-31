const logger = require('../../../utils/logger');
const prisma = require('../../../utils/prisma-client');

const deleteCommentRepo = async (req) => {
  try {
    const { authorId, postId } = req.query;

    console.log(authorId, postId);

    const getAllComments = await prisma.comments.findMany({
      where: {
        postId: postId,
      },
    });

    const filterDeleteComment = getAllComments.filter(
      (comment) => comment.authorId == authorId
    );
    const { id } = filterDeleteComment[0];
    const deleteComment = await prisma.comments.delete({
      where: {
        id: id,
      },
    });
    return deleteComment;
  } catch (error) {
    logger.warn(`deleteCommentRepo ${error?.message}`);
    return error?.message;
  }
};

module.exports = deleteCommentRepo;

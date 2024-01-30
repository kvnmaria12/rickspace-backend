const logger = require('../../../utils/logger');
const prisma = require('../../../utils/prisma-client');

const updateCommentRepo = async (req) => {
  try {
    const { postId, authorId, comment } = req.body;

    const getAllPost = await prisma.comments.findMany({
      where: {
        postId: postId,
      },
    });

    const filteredComments = getAllPost.filter(
      (post) => post.authorId == authorId
    );

    if (filteredComments.length) {
      const { id } = filteredComments[0];
      const updateComment = await prisma.comments.update({
        where: {
          id: id,
        },
        data: {
          comment: comment,
        },
      });
      if (updateComment) {
        return updateComment;
      }
    }
  } catch (error) {
    logger.warn(`updateCommentRepo ${error?.message}`);
    return error?.message;
  }
};

module.exports = updateCommentRepo;

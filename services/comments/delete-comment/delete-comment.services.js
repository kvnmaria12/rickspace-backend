const deleteCommentRepo = require('../../../repository/comments/delete-comment/delete-comment.repository');
const logger = require('../../../utils/logger');

const deleteCommentService = async (req) => {
  try {
    const repoResponse = await deleteCommentRepo(req);
    if (repoResponse) {
      return repoResponse;
    }
  } catch (error) {
    logger.warn(`deleteCommentService ${error?.message}`);
    return error;
  }
};

module.exports = deleteCommentService;

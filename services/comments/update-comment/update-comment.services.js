const updateCommentRepo = require('../../../repository/comments/update-comment/update-comment.repository');
const logger = require('../../../utils/logger');

const updateCommentService = async (req) => {
  try {
    const repoResponse = await updateCommentRepo(req);
    if (repoResponse) {
      return repoResponse;
    }
  } catch (error) {
    logger.warn(`update-comment-repo-service ${error?.message}`);
    throw new Error();
    return error?.message;
  }
};

module.exports = updateCommentService;

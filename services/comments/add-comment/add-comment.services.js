const addCommentRepo = require('../../../repository/comments/add-comment/add-comment.repository');
const logger = require('../../../utils/logger');

const addCommentService = async (req) => {
  try {
    const repoResponse = await addCommentRepo(req);
    return repoResponse;
  } catch (error) {
    logger.warn(`commentsService -> ${error?.message}`);
    throw new Error(`commentsService ${error?.message}`);
    return error?.message;
  }
};

module.exports = addCommentService;

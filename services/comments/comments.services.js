const commentsRepo = require('../../repository/comments/comments.repository');
const logger = require('../../utils/logger');

const commentsService = async (req) => {
  try {
    const repoResponse = await commentsRepo(req);
    return repoResponse;
  } catch (error) {
    logger.warn(`commentsService -> ${error?.message}`);
    return error;
  }
};

module.exports = commentsService;

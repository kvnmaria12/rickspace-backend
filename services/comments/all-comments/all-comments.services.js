const getAllCommentsRepo = require('../../../repository/comments/all-comments/all-commets.repository');
const logger = require('../../../utils/logger');

const getAllCommentsService = async (req) => {
  try {
    const repoResponse = await getAllCommentsRepo(req);
    return repoResponse;
  } catch (error) {
    logger.warn(`allCommentsService  ${error?.message}`);
    return error?.message;
  }
};

module.exports = getAllCommentsService;

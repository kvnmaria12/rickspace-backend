const followRepo = require('../../repository/follow/follow.repo');
const logger = require('../../utils/logger');

const followService = async (req) => {
  try {
    const repoResponse = await followRepo(req);
    return repoResponse;
  } catch (error) {
    logger.warn(`error from get-post-service ---> ${error.message}`);
    return error;
  }
};

module.exports = followService;

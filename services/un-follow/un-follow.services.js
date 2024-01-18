const unFollowRepository = require('../../repository/un-follow/un-follow.repository');
const logger = require('../../utils/logger');

const unFollowService = async (req) => {
  try {
    const repoResponse = await unFollowRepository(req);
    if (repoResponse) {
      return repoResponse;
    }
  } catch (error) {
    logger.warn(`unFollowService ${error?.message}`);
    return error;
  }
};

module.exports = unFollowService;

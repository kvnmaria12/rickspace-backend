const likeRepo = require('../../repository/like/like.repository');
const logger = require('../../utils/logger');

const likeService = async (req) => {
  try {
    const repoResponse = await likeRepo(req);
    return true;
  } catch (error) {
    logger.warn(`likeServiceErr -> ${error?.message}`);
    return error;
  }
};

module.exports = likeService;

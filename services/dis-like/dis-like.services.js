const unLikeRepo = require('../../repository/dis-like/dis-like.repository');
const logger = require('../../utils/logger');

const unLikeServices = async (req) => {
  try {
    const repoResponse = await unLikeRepo(req);
    return repoResponse;
  } catch (error) {
    logger.warn(`unLikeService  ---> ${error?.message}`);
    return error?.message;
  }
};

module.exports = unLikeServices;

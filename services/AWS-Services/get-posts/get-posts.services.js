const getAllPostsRepo = require('../../../repository/AWS-Repository/get-posts/get-posts.repo');
const logger = require('../../../utils/logger');

const getPostService = async (req) => {
  try {
    const allPostRepoData = await getAllPostsRepo(req);
    return allPostRepoData;
  } catch (error) {
    logger.error('error from get-post-service --->', error);
    return error;
  }
};

module.exports = getPostService;

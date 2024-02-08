const savePostRepository = require('../../repository/save-post/save-post.repository');
const logger = require('../../utils/logger');

const savePostServices = async (req) => {
  try {
    const repoResponse = await savePostRepository(req);

    if (repoResponse) {
      return repoResponse;
    }
  } catch (error) {
    logger.warn(`savePostServices ${error?.message}`);
    return error?.message;
  }
};

module.exports = savePostServices;

const getAllPostsRepo = require('../../../repository/AWS-Repository/get-posts/get-posts.repo');

const getPostService = async (req) => {
  try {
    const allPostRepoData = await getAllPostsRepo(req);
    return allPostRepoData;
  } catch (error) {
    return error;
  }
};

module.exports = getPostService;

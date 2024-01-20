const logger = require('../../utils/logger');
const primsa = require('../../utils/prisma-client');

const unLikeRepo = async (req) => {
  try {
    const { postId, authorId } = req.body;
    let filteredLikes;

    const getLikes = await primsa.likes.findMany({
      where: {
        postId: postId,
      },
    });

    if (getLikes.length) {
      filteredLikes = getLikes.filter((likes) => likes.authorId == authorId);
      const { id } = filteredLikes[0];
      const deleteLike = await primsa.likes.delete({
        where: {
          id: id,
        },
      });
      return deleteLike;
    }
    // return deleteResponse;
  } catch (error) {
    logger.warn(`unLikeRepo---> ${error?.message}`);
    return error?.message;
  }
};

module.exports = unLikeRepo;

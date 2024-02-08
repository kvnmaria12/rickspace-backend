const logger = require('../../utils/logger');
const prisma = require('../../utils/prisma-client');

const savePostRepository = async (req) => {
  try {
    const {
      authorId,
      postId,
      authorName,
      imageName,
      postURL,
      description,
      title,
    } = req.body;

    const dbReponse = await prisma.savedPost.create({
      data: {
        authorId,
        postId,
        authorName,
        imageName,
        postURL,
        description,
        title,
      },
    });
    return dbReponse;
  } catch (error) {
    logger.warn(`savePostRepository${error?.message}`);
    return error;
  }
};

module.exports = savePostRepository;

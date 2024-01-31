const logger = require('../../utils/logger');
const prisma = require('../../utils/prisma-client');

const followRepo = async (req) => {
  try {
    const { authorId, followerId } = req.body;

    const dbResponse = await prisma.followers.create({
      data: {
        authorId: authorId,
        followerId: followerId,
      },
    });
    console.log(dbResponse);
    return dbResponse;
  } catch (error) {
    logger.warn(`resetPasswrdRepo --> ${error.message}`);
    return error?.message;
  }
};

module.exports = followRepo;

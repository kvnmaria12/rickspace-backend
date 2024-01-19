const prisma = require('../../utils/prisma-client');
const logger = require('../../utils/logger');

const likeRepo = async (req) => {
  try {
    const { authorId, postId } = req.body;

    const response = await prisma.likes.create({
      data: {
        postId: postId,
        authorId: authorId,
        likeCount: 1,
      },
    });

    let listofLikeUserIds = [];
    const getPostsLikedUsers = await prisma.likes.findMany({
      where: {
        postId: postId,
      },
    });
    console.log(getPostsLikedUsers);
    listofLikeUserIds = getPostsLikedUsers.map((likes) => likes.authorId);
    console.log(listofLikeUserIds);

    const getListofUsers = await prisma.user.findMany({
      where: {
        id: { in: listofLikeUserIds },
      },
    });

    console.log(getListofUsers);
  } catch (error) {
    logger.warn(`likeRepo --> ${error.message}`);
    return error?.message;
  }
};

module.exports = likeRepo;

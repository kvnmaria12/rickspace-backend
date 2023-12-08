const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllPostsRepo = async (req) => {
  try {
    const { authorId } = req.body;

    const posts = await prisma.likes.findMany({
      // where: {
      //   id: authorId,
      // },
      // include: {
      //   post: true,
      // },
      where: {
        authorId: authorId,
      },
    });
    console.log('posts', posts);
    return posts;
  } catch (error) {
    console.log('error --->', error);
    return error?.code;
  }
};

module.exports = getAllPostsRepo;

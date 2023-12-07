const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllPostsRepo = async (req) => {
  try {
    const { authorId } = req.body;

    const posts = await prisma.user.findMany({
      where: {
        id: '6554bc364777c04eb484e6fa',
      },
      include: {
        post: true,
      },
    });
    console.log('posts', posts[0]?.post);
    return posts[0]?.post;
  } catch (error) {
    console.log('error --->', error);
    return error?.code;
  }
};

module.exports = getAllPostsRepo;

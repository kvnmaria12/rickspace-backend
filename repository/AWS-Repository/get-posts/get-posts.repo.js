const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllPostsRepo = async (req) => {
  try {
    const { authorId } = req.body;
    const posts = await prisma.post.findMany({
      where: {
        authorId: '6554bc364777c04eb484e6fa',
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

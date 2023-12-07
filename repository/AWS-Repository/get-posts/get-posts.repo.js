const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

const getAllPostsRepo = async (req) => {
  try {
    const { authorId } = req.body;

    const posts = await prisma.post.findMany({
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

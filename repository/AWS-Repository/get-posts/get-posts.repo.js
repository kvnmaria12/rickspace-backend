const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllPostsRepo = async (req) => {
  try {
    const { authorId } = req.body;

    console.log('authorId', authorId);

    const posts = await prisma.user.findMany({
      where: {
        id: authorId,
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

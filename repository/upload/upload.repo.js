const { PrismaClient } = require('@prisma/client');

// database queries
const prisma = new PrismaClient();

const uploadFile = async (req) => {
  try {
    const { imageURL, title, description } = req.body;
    const fileUploadResponse = await prisma.post.create({
      data: {
        authorId: '656592cb745c23b4855a3ec4',
        imageURL: imageURL,
        title: title,
        description: description,
      },
    });
    return fileUploadResponse;
  } catch (error) {
    return {
      error: error?.message,
    };
  }
};

module.exports = uploadFile;

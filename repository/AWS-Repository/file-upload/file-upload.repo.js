const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

let CLOUDFRONTCDNURL = 'https://d377pmctxnwbuz.cloudfront.net/';

const uploadFile = async (req, imageName) => {
  try {
    CLOUDFRONTCDNURL = CLOUDFRONTCDNURL + imageName;
    const { id, title, description } = req.body;
    const fileUploadResponse = await prisma.post.create({
      data: {
        authorId: id,
        imageName: imageName,
        postURL: CLOUDFRONTCDNURL,
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

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const uploadFile = async (req, imageName, mimetype) => {
  try {
    let CLOUDFRONTCDNURL = 'https://d377pmctxnwbuz.cloudfront.net/';
    CLOUDFRONTCDNURL = CLOUDFRONTCDNURL + imageName;
    const { id, title, description, authorName } = req.body;
    const fileUploadResponse = await prisma.post.create({
      data: {
        authorId: id,
        imageName: imageName,
        authorName: authorName,
        postURL: CLOUDFRONTCDNURL,
        title: title,
        description: description,
        fileType: mimetype,
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

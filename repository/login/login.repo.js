const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.loginRepo = async (req) => {
  const requestBody = req.body;
  const { userInfo } = requestBody;
  return new Promise(async (resolve, reject) => {
    try {
      const findEmailAndMobile = await prisma.user.findMany({
        where: {
          OR: [
            {
              email: userInfo,
            },
            {
              mobileNo: userInfo,
            },
          ],
        },
      });

      if (findEmailAndMobile.length <= 0) {
        resolve('No_user_found');
      } else {
        resolve(findEmailAndMobile);
      }
    } catch (error) {
      reject(error);
    }
  });
};

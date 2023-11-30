const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.loginRepo = async (req) => {
  const requestBody = req.body;
  const { userInfo } = requestBody;
  return new Promise(async (resolve, reject) => {
    try {
      const findEmailAndMobile = await prisma.user.findUnique({
        where: {
          // OR: [
          //   {
          //     email: userInfo,
          //   },
          //   {
          //     mobileNo: userInfo,
          //   },
          // ],
          // AND: [
          //   {
          //     id: '656592cb745c23b4855a3ec5',
          //   },
          // ],
          id: '6554b783f389b951fe8ec4d2',
        },
        include: {
          post: true,
        },
      });

      console.log('findEmailAndMobile', findEmailAndMobile);

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

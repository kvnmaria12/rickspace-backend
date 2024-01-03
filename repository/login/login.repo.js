const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.loginRepo = async (req) => {
  const requestBody = req.body;
  const { userInfo } = requestBody;
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
      return 'No_user_found';
    } else {
      return findEmailAndMobile;
    }
  } catch (error) {
    return error;
  }
};

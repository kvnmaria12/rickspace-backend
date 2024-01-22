const prisma = require('../../utils/prisma-client');

exports.loginRepo = async (req) => {
  const requestBody = req.body;
  const { userInfo } = requestBody;
  try {
    let responseData = {};
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

    await prisma.$disconnect();

    if (findEmailAndMobile.length <= 0) {
      return 'No_user_found';
    } else {
      return findEmailAndMobile;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

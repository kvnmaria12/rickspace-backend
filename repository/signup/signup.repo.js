const prisma = require('../../utils/prisma-client');

exports.userRegistration = async (userData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { email, mobileNo } = userData;

      const findEmailAndMobile = await prisma.user.findMany({
        where: {
          OR: [
            {
              email: email,
            },
            {
              mobileNo: mobileNo,
            },
          ],
        },
      });

      if (findEmailAndMobile.length) {
        console.log(findEmailAndMobile);
        const email = findEmailAndMobile[0].email;
        const mobileNo = findEmailAndMobile[0].mobileNo;

        if (email == userData.email) {
          resolve('email_exists');
        }
        if (mobileNo == userData.mobileNo) {
          resolve('mobileNo_exists');
        }
      } else {
        const userResponse = await prisma.user.create({
          data: {
            name: userData.name,
            email: userData.email,
            mobileNo: userData.mobileNo,
            password: userData.password,
          },
        });
        if (userResponse) {
          resolve(userResponse);
        }
      }
    } catch (error) {
      reject(error);
      console.log('error', error);
    }
  });
};

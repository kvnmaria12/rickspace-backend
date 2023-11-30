const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.userRegistration = async (userData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const findEmailAndMobile = await prisma.user.findMany({
        where: {
          OR: [
            {
              email: userData.email,
            },
            {
              mobileNo: userData.mobileNo,
            },
          ],
        },
      });

      if (findEmailAndMobile.length) {
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
        resolve(userResponse);
      }
    } catch (error) {
      reject(error);
      console.log('error', error);
    }
  });
};

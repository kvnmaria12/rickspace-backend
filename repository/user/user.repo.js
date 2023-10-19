const { PrismaClient } = require('@prisma/client');

// database queries

const prisma = new PrismaClient();

exports.userRegistration = async (userData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userResponse = await prisma.user.create({
        data: {
          name: userData.name,
          email: userData.email,
          mobileNo: userData.mobileNo,
          password: userData.password,
        },
      });
      console.log(userResponse);
      if (userResponse) {
        resolve(userResponse);
      }
    } catch (error) {
      reject(error);
      console.log(error);
    }
  });
};

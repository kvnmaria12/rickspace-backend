const { PrismaClient } = require('@prisma/client');
const NodeCache = require('node-cache');
const logger = require('../../utils/logger');
const myCache = new NodeCache();

const prisma = new PrismaClient();

exports.userRegistration = async (userData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { name, email, mobileNo, password } = userData;

      // let userValue = logger.info(userValue);
      const userValue = Object.keys(myCache.mget([email, mobileNo]));

      console.log(userValue);

      if (userValue.length > 0) {
        if (userValue[0].includes('@')) {
          resolve('email_exists');
        } else {
          resolve('mobileNo_exists');
        }
      } else {
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
          console.log('userResponse', userResponse);
          if (userResponse) {
            // storing in node cache
            const { name, email, password } = userResponse;
            const userInfo = {
              name,
              email,
              mobileNo,
              password,
            };
            const cacheResponse = myCache.mset([
              { key: email, val: userInfo, ttl: 0 },
              { key: mobileNo, val: userInfo, ttl: 0 },
            ]);
            logger.info(cacheResponse);
          }
          resolve(userResponse);
        }
      }
      myCache.close();
    } catch (error) {
      reject(error);
      console.log('error', error);
    }
  });
};

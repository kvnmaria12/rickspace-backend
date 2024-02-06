const logger = require('../../utils/logger');
const prisma = require('../../utils/prisma-client');

const allUsersRepository = async (req) => {
  try {
    const dbReponse = await prisma.user.findMany();
    return dbReponse;
  } catch (error) {
    logger.warn(`allUsersRepo ${error?.message}`);
    return error?.message;
  }
};

module.exports = allUsersRepository;

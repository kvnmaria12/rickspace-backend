const logger = require('../../utils/logger');
const prisma = require('../../utils/prisma-client');

const allUsersRepository = async () => {
  try {
    const dbReponse = await prisma.user.findMany();
    return dbReponse;
  } catch (error) {
    logger.warn(`allUsersRepo ${error?.message}`);
    throw new Error(`allUsersRepo ${error?.message}`);
  }
};

module.exports = allUsersRepository;

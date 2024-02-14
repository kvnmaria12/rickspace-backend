const allUsersRepository = require('../../repository/all-users/all-users.repository');
const logger = require('../../utils/logger');

const allUsersServices = async () => {
  try {
    const repoResponse = await allUsersRepository();
    return repoResponse;
  } catch (error) {
    logger.warn(`allUsersServices ${error?.message}`);
    throw new Error(`allUsersService ${error?.message}`);
  }
};

module.exports = allUsersServices;

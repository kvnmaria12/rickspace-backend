const allUsersRepository = require('../../repository/all-users/all-users.repository');
const logger = require('../../utils/logger');

const allUsersServices = async (req) => {
  try {
    const repoResponse = await allUsersRepository(req);
    return repoResponse;
  } catch (error) {
    logger.warn(`allUsersServices ${error?.message}`);
    return error;
  }
};

module.exports = allUsersServices;

const allUsersServices = require('../../services/all-users/all-users.services');
const logger = require('../../utils/logger');

const allUsersController = async (req, res) => {
  try {
    const response = await allUsersServices();

    if (response) {
      return res.status(200).json({ results: response });
    }
    return res.status(500).json({ message: 'Server Error' });
  } catch (error) {
    logger.warn(`allUsersController ----> ${error?.message}`);
    return res.status(500).json({ message: error?.message });
  }
};

module.exports = allUsersController;

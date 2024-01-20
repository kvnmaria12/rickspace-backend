const unLikeServices = require('../../services/un-like/un-like.services');
const logger = require('../../utils/logger');

const unLikeController = async (req, res) => {
  try {
    const serviceResponse = await unLikeServices(req);
    if (serviceResponse) {
      res.status(200).json({ messsage: 'DisLiked Successfully' });
    }
  } catch (error) {
    logger.warn(`unLikeController ${error?.message}`);
    res.status(500).json({ message: error?.message });
  }
};

module.exports = unLikeController;

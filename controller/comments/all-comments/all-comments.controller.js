const getAllCommentsService = require('../../../services/comments/all-comments/all-comments.services');
const logger = require('../../../utils/logger');

const getAllCommentsController = async (req, res) => {
  try {
    const response = await getAllCommentsService(req);
    if (response.length) {
      return res.status(200).json({ comments: response });
    }
    return res.status(200).json({ comments: response });
  } catch (error) {
    logger.warn(`allCommentsController${error?.message}`);
    return res.status(500).json({ message: error?.message });
  }
};

module.exports = getAllCommentsController;

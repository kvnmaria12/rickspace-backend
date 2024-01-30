const commentsService = require('../../../services/comments/add-comment/add-comment.services');
const logger = require('../../../utils/logger');

const addCommentController = async (req, res) => {
  try {
    const response = await commentsService(req);
    if (response) {
      res.status(200).json({ message: 'commented successfully' });
    }
  } catch (error) {
    logger.warn(`commentsControler -> ${error?.message}`);
    return res.status(500).json({ message: error?.message });
  }
};

module.exports = addCommentController;

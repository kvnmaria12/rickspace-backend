const logger = require('../../../utils/logger');

const deleteCommentController = (req, res) => {
  try {
  } catch (error) {
    logger.warn(`commentsControler -> ${error?.message}`);
    return res.status(500).json({ message: error?.message });
  }
};

module.exports = deleteCommentController;

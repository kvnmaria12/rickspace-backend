const deleteCommentService = require('../../../services/comments/delete-comment/delete-comment.services');
const logger = require('../../../utils/logger');

const deleteCommentController = async (req, res) => {
  try {
    const response = await deleteCommentService(req);
    if (response) {
      return res.status(200).json({ message: 'Comment Deleted Successfully' });
    }
  } catch (error) {
    logger.warn(`commentsControler -> ${error?.message}`);
    return res.status(500).json({ message: error?.message });
  }
};

module.exports = deleteCommentController;

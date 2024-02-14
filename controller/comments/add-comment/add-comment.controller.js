const commentsService = require('../../../services/comments/add-comment/add-comment.services');
const logger = require('../../../utils/logger');
const { validationResult } = require('express-validator');

const addCommentController = async (req, res) => {
  try {
    const errors = validationResult(req);
    await commentsService(req);
    if (errors.isEmpty()) {
      return res.status(200).json({ message: 'commented successfully' });
    } else {
      return res.status(412).json({ error: errors.array()?.[0]?.msg });
    }
  } catch (error) {
    logger.warn(`commentsControler -> ${error?.message}`);
    return res.status(500).json({ message: error?.message });
  }
};

module.exports = addCommentController;

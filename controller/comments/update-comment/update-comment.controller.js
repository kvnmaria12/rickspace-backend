const updateCommentService = require('../../../services/comments/update-comment/update-comment.services');
const { validationResult } = require('express-validator');

const updateCommentController = async (req, res) => {
  try {
    const errors = validationResult(req);
    const reponse = await updateCommentService(req);
    if (errors.isEmpty()) {
      return res.status(200).json({ message: 'commente updated successfully' });
    } else {
      return res.status(412).json({ error: errors.array()?.[0].msg });
    }
  } catch (error) {
    logger.warn(`commentsControler -> ${error?.message}`);
    return res.status(500).json({ message: error?.message });
  }
};

module.exports = updateCommentController;

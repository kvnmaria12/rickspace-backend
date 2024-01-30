const updateCommentService = require('../../../services/comments/update-comment/update-comment.services');

const updateCommentController = async (req, res) => {
  try {
    const reponse = await updateCommentService(req);
    return res.status(200).json({
      message: 'comment updated succesfully',
    });
  } catch (error) {
    logger.warn(`commentsControler -> ${error?.message}`);
    return res.status(500).json({ message: error?.message });
  }
};

module.exports = updateCommentController;

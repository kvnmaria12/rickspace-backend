const savePostServices = require('../../services/save-post/save-post.services');
const logger = require('../../utils/logger');

const savePostController = async (req, res) => {
  try {
    const response = await savePostServices(req);

    if (response) {
      return res.status(200).json({ message: 'Post saved successfully' });
    }
  } catch (error) {
    logger.warn(`savePostController ${error?.message}`);
    return res.status(500).json({ message: error?.message });
  }
};

module.exports = savePostController;

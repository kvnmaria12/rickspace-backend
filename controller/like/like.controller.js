const likeService = require('../../services/like/like.services');

const likeController = async (req, res) => {
  try {
    const serviceRes = await likeService(req);
    res.status(200).json({ message: 'Liked Successsfully' });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

module.exports = likeController;

const followService = require('../../services/follow/follow.services');

const followController = async (req, res) => {
  try {
    const { authorId, postId, userId } = req.query;

    if (typeof authorId == 'undefined') {
      return res.status(400).json({ message: 'authorId is required' });
    }
    if (typeof userId == 'undefined') {
      if (typeof postId == 'undefined') {
        return res.status(400).json({ message: 'postId is required' });
      }
    }
    if (typeof postId == 'undefined') {
      if (typeof userId == 'undefined') {
        return res.status(400).json({ message: 'userId is required' });
      }
    }

    const followResponse = await followService(req);

    if (followResponse) {
      res.status(200).json({ message: 'Followed Successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

module.exports = followController;

const followService = require('../../services/follow/follow.services');

const followController = async (req, res) => {
  try {
    const { authorId, postId, followerId } = req.query;

    if (typeof authorId == 'undefined') {
      return res.status(400).json({ message: 'authorId is required' });
    }

    if (typeof postId == 'undefined' && typeof followerId == 'undefined') {
      return res
        .status(400)
        .json({ message: 'Either postId or followerId is required' });
    }

    if (postId) {
      if (typeof authorId == 'undefined') {
        return res.status(400).json({ message: 'authorId is required' });
      } else if (typeof postId == 'undefined') {
        return res.status(400).json({ message: 'postId is required' });
      }
    }

    if (followerId) {
      console.log('followerId', followerId);

      if (typeof authorId == 'undefined') {
        return res.status(400).json({ message: 'authorId is required' });
      } else if (typeof followerId == 'undefined') {
        return res.status(400).json({ message: 'followerId is required' });
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

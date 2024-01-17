const followService = require('../../services/follow/follow.services');

const followController = async (req, res) => {
  try {
    const followResponse = await followService(req);
    if (followResponse) {
      res.status(200).json({ message: 'Followed Successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

module.exports = followController;

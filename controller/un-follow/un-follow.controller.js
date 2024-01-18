const unFollowService = require('../../services/un-follow/un-follow.services');

const unFollowController = async (req, res) => {
  try {
    const serviceResponse = await unFollowService(req);
    if (serviceResponse) {
      res.status(200).json({ message: 'Unfollowed Successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

module.exports = unFollowController;

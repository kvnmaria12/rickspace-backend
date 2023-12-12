const getPostService = require('../../../services/AWS-Services/get-posts/get-posts.services');
const { validationResult } = require('express-validator');

const getAllPost = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const allPostService = await getPostService(req);
      if (allPostService && allPostService.length) {
        res.status(200).json({ posts: allPostService });
      } else {
        res.status(400).json({ message: 'Invalid user Id' });
      }
    } else {
      res.status(412).json({ error: errors.array()?.[0].msg });
    }
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
};

module.exports = getAllPost;

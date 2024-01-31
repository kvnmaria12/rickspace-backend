const body = require('../../utils/express-body');

const updateCommentValidator = [
  body('authorId')
    .notEmpty()
    .withMessage('authorId cannot be empty')
    .isString()
    .withMessage('authorId must be a String'),

  body('postId')
    .notEmpty()
    .withMessage('postId cannot be empty')
    .isString()
    .withMessage('postId must be a String'),

  body('comment')
    .notEmpty()
    .withMessage('comment cannot be empty')
    .isString()
    .withMessage('comment must be a String'),
];

module.exports = updateCommentValidator;

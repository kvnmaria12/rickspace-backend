const { body } = require('express-validator');

const getFileValidator = [
  body('authorId')
    .notEmpty()
    .withMessage('id cannot be empty')
    .isString()
    .withMessage('id must be a String'),
];

module.exports = getFileValidator;

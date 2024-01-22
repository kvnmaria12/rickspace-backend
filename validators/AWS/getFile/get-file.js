const body = require('../../../utils/express-body');

const getFileValidator = [
  body('userId')
    .notEmpty()
    .withMessage('id cannot be empty')
    .isString()
    .withMessage('id must be a String'),
];

module.exports = getFileValidator;

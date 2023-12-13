const body = require('../../../utils/express-body');

const resetPasswordValidator = [
  body('id')
    .notEmpty()
    .withMessage('id cannot be empty')
    .isString()
    .withMessage('id must be a String'),
  body('password')
    .notEmpty()
    .withMessage('password cannot be empty')
    .isString()
    .withMessage('password must be a String')
    .isLength({ min: 5 })
    .withMessage('password must be min 5 characters'),
];

module.exports = resetPasswordValidator;

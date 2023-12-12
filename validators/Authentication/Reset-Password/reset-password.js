const body = require('../../../utils/express-body');

const resetPasswordValidator = [
  body('password')
    .notEmpty()
    .withMessage('password cannot be empty')
    .isString()
    .withMessage('password must be a String')
    .isLength({ min: 5 })
    .withMessage('password must be min 5 characters'),
];

module.exports = resetPasswordValidator;

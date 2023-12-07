const { body } = require('express-validator');

const fileUploadValidator = [
  body('name').notEmpty().withMessage('name cannot be empty'),
];

module.exports = fileUploadValidator;

const { validationResult } = require('express-validator');

const fieldValidation = (req, res) => {
  try {
    const { name } = req.body;
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      res.status(200).json({ message: name });
    }
    res.status(400).json({ errors: errors.array() });
  } catch (error) {
    res.status(500).json({ error: 'sever error' });
  }
};

module.exports = fieldValidation;

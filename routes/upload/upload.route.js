const express = require('express');

const uploadController = require('../../controller/upload/upload.controller');

const router = express.Router();

router.post('/add-post', uploadController);

module.exports = router;

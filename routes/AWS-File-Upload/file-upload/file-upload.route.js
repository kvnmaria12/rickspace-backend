const express = require('express');
const multer = require('multer');
const router = express.Router();
const uploadController = require('../../../controller/AWS-File-Upload/file-upload/file-upload.controller');
const fileUploadValidator = require('../../../validators/AWS/File-upload/file-upload');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post(
  '/add-post',
  fileUploadValidator,
  upload.single('post'),
  uploadController
);

module.exports = router;

const uploadRepo = require('../../repository/file-upload/file-upload.repo');
const { PutObjectCommand } = require('@aws-sdk/client-s3');
const S3Config = require('../../utils/s3Config');
const {
  bucketName,
  bucketRegion,
  accessKey,
  secretAccessKey,
} = require('../../utils/s3-env');
const randomImageName = require('../../utils/randomImageName');

const s3 = S3Config(accessKey, secretAccessKey, bucketRegion);

const upload = async (req) => {
  try {
    const imageName = randomImageName();

    const { buffer, mimetype } = req.file;

    const fileType = mimetype.split('/')[0];

    if (fileType != 'image' && fileType != 'video') {
      return {
        error: 'File type must be either image or video',
        code: 400,
      };
    }

    const params = {
      Bucket: bucketName,
      Key: imageName,
      Body: buffer,
      ContentType: mimetype,
    };

    const command = new PutObjectCommand(params);
    const response = await s3.send(command);

    const awsSuccessCode = response['$metadata']?.httpStatusCode;

    // adding the imageName into the request body;
    const uploadResponse = await uploadRepo(req, imageName, mimetype);

    if (awsSuccessCode && uploadResponse) {
      return { message: 'File Uploaded Successfully' };
    }

    return uploadResponse;
  } catch (error) {
    throw new Error(`file-upload-service ${error?.message}`);
    return {
      error: error?.message,
    };
  }
};

module.exports = upload;

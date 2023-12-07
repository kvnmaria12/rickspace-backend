const uploadRepo = require('../../../repository/AWS-Repository/file-upload/file-upload.repo');
const { PutObjectCommand } = require('@aws-sdk/client-s3');
// const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const S3Config = require('../../../utils/s3Config');
const {
  bucketName,
  bucketRegion,
  accessKey,
  secretAccessKey,
} = require('../../../utils/s3-env');
const randomImageName = require('../../../utils/randomImageName');
const sharp = require('sharp');

const s3 = S3Config(accessKey, secretAccessKey, bucketRegion);

// randomeImageName
const imageName = randomImageName();

const upload = async (req) => {
  try {
    const { buffer, mimetype } = req.file;

    const fileType = mimetype.split('/')[0];

    console.log('req File', req.file);

    if (fileType != 'image' && fileType != 'video') {
      return {
        error: 'File type must be either image or video',
        code: 400,
      };
    }

    let shrinkedBuffer;
    if (fileType == 'image') {
      shrinkedBuffer = await sharp(buffer)
        .resize({
          height: 1920,
          width: 1080,
          fit: 'contain',
        })
        .toBuffer();
    }

    const params = {
      Bucket: bucketName,
      Key: imageName,
      Body: shrinkedBuffer || buffer,
      ContentType: mimetype,
    };

    const command = new PutObjectCommand(params);
    const response = await s3.send(command);

    console.log('AWS Response', response['$metadata']?.httpStatusCode);

    const awsSuccessCode = response['$metadata']?.httpStatusCode;

    // adding the imageName into the request body;
    const uploadResponse = await uploadRepo(req, imageName);

    if (awsSuccessCode && uploadResponse) {
      return { message: 'File Uploaded Successfully' };
    }

    return uploadResponse;
  } catch (error) {
    console.log('error Message', error?.message);
    return {
      error: error?.message,
    };
  }
};

module.exports = upload;

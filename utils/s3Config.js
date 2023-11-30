const { S3Client } = require('@aws-sdk/client-s3');

const S3ClientConfig = (accessKey, secretAccessKey, bucketRegion) => {
  const s3 = new S3Client({
    credentials: {
      accessKeyId: accessKey,
      secretAccessKey: secretAccessKey,
    },
    region: bucketRegion,
  });

  return s3;
};

module.exports = S3ClientConfig;

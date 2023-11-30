const dotenv = require('dotenv');

dotenv.config();

const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const accessKey = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

module.exports = { bucketName, bucketRegion, accessKey, secretAccessKey };

const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_BUCKET_REGION,
});

// upload a photo
const uploadFile = (file) => {
  const fileStream = fs.createReadStream(file.tempFilePath);

  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Body: fileStream,
    Key: file.md5,
  };

  return s3.upload(uploadParams).promise();
};

module.exports = { uploadFile };

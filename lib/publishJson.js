const AWS = require('aws-sdk');
const path = require('path');

const s3 = new AWS.S3({ region: 'us-east-1' });

module.exports = async(data, filePath) => {
  const KEY = path.join('data/2020', filePath);

  const params = {
    Bucket: 'graphics.thomsonreuters.com',
    Key: KEY,
    Body: JSON.stringify(data),
    CacheControl: 'no-cache',
    ContentType: 'application/json',
  };

  return new Promise((resolve, reject) => {
    s3.putObject(params, (err, data) => {
      if (err) reject(err);
      resolve();
    });
  });
};

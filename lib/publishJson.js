const AWS = require('aws-sdk');

const s3 = new AWS.S3({ region: 'us-east-1' });

module.exports = async(data, filePath) => {
  // REWRITE ME TO YOUR DATA PATH
  const KEY = `data/2020/example/${filePath}`;

  const params = {
    Bucket: 'graphics.thomsonreuters.com',
    Key: KEY,
    Body: JSON.stringify(data),
    CacheControl: 'no-cache',
    ACL: 'public-read',
    ContentType: 'application/json',
  };

  return new Promise((resolve, reject) => {
    s3.putObject(params, (err, data) => {
      if (err) reject(err);
      resolve();
    });
  });
};

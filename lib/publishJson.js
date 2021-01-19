const AWS = require('aws-sdk');
const path = require('path');
const fs = require('fs');

const s3 = new AWS.S3({ region: 'us-east-1' });

module.exports = async(data, filePath) => {
  const KEY = process.env.SERVER_WORKFLOW ? path.join('data/2020', filePath) : path.resolve(__dirname, `../data/${filePath}`);

  const params = {
    Bucket: 'graphics.thomsonreuters.com',
    Key: KEY,
    Body: JSON.stringify(data),
    CacheControl: 'no-cache',
    ContentType: 'application/json',
  };

  return new Promise((resolve, reject) => {
    if (process.env.SERVER_WORKFLOW) {
      s3.putObject(params, (err, data) => {
        if (err) reject(err);
        resolve();
      });
    } else {
      try {
        fs.writeFileSync(KEY, JSON.stringify(data, 4));
        resolve();
      } catch (err) {
        reject(err);
      }
    }
  });
};

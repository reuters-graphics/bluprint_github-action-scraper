const AWS = require('aws-sdk');
const path = require('path');
const fs = require('fs');
const logger = require('./logger');

const s3 = new AWS.S3({ region: 'us-east-1' });

module.exports = async(data, serverDirectory, fileName) => {
  const KEY = process.env.SERVER_WORKFLOW ? path.join(`data/2021/${serverDirectory}`, fileName) : path.resolve(__dirname, `../data/${fileName}`);

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
        if (err) {
          logger.error({ title: '⚙️ {{ projectName }}', text: '❌ Failed to push data to server' });
          reject(err);
        }
        console.log(KEY, 'pushed to server sucessfully!');
        resolve();
      });
    } else {
      try {
        fs.writeFileSync(KEY, params.Body);
        console.log(KEY, 'saved to ./data sucessfully!');
        resolve();
      } catch (err) {
        logger.error({ title: '⚙️ {{ projectName }}', text: '❌ Failed to save data' });
        reject(err);
      }
    }
  });
};

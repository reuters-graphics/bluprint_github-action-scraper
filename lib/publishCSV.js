import * as url from 'url';

import AWS from 'aws-sdk';
import d3DSV from 'd3-dsv';
import fs from 'fs';
import logger from './logger.js';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const s3 = new AWS.S3({ region: 'us-east-1' });

export default async(data, serverDirectory, fileName) => {
  const KEY = process.env.SERVER_WORKFLOW ? path.join(`data/2023/${serverDirectory}`, fileName) : path.resolve(__dirname, `../data/${fileName}`);

  const params = {
    Bucket: 'graphics.thomsonreuters.com',
    Key: KEY,
    Body: d3DSV.csvFormat(data),
    CacheControl: 'no-cache',
    ContentType: 'text/csv',
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
        console.log(KEY, 'saved to ../data sucessfully!');
        resolve();
      } catch (err) {
        logger.error({ title: '⚙️ {{ projectName }}', text: '❌ Failed to save data' });
        reject(err);
      }
    }
  });
};

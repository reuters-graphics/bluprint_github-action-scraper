import AWS from 'aws-sdk';
import d3DSV from 'd3-dsv';
import fs from 'fs';
import path from 'path';

const s3 = new AWS.S3({ region: 'us-east-1' });

export default async(data, serverDirectory, fileName) => {
  const KEY = process.env.SERVER_WORKFLOW ? path.join(`data/2021/${serverDirectory}`, fileName) : path.resolve(__dirname, `../data/${fileName}`);

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
        if (err) reject(err);
        console.log(KEY, 'pushed to server sucessfully!');
        resolve();
      });
    } else {
      try {
        fs.writeFileSync(KEY, params.Body);
        console.log(KEY, 'saved to ../data sucessfully!');
        resolve();
      } catch (err) {
        reject(err);
      }
    }
  });
};

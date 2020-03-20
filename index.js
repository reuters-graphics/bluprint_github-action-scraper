const axios = require('axios');
const publishJson = require('./lib/publishJson');

const run = async() => {
  const response = await axios.get('https://someapi.com/data/');
  const data = await response.json();

  // Customize this path for your project, making sure you put data
  // at least one folder deep. Your data will be published on the
  // server to a URL like:
  // https://graphics.thomsonreuters.com/data/2020/my-project/data.json
  const filePath = 'my-project/data.json';

  await publishJson(data, filePath);
};

run();

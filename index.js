const axios = require('axios');
const publishJson = require('./lib/publishJson');

const run = async() => {
  const response = await axios.get('https://mydata.com/data.json');
  const data = await response.json();
  await publishJson(data, 'data.json');
};

run();

const axios = require('axios');
const logger = require('./logger');

module.exports = async(url) => {
  let data;
  try {
    const response = await axios.get(url);
    data = await response.data;
  } catch (err) {
    await logger.error({ title: '⚙️ {{ projectName }}', text: '❌ Failed to fetch data' });
  }

  return data;
};

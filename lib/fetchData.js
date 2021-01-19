const axios = require('axios');

module.exports = async(url) => {
  const response = await axios.get(url);
  const data = await response.data;

  return data;
};

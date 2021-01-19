const axios = require('axios');
const publishJson = require('./lib/publishJson');

/* ------------------------ */
// Customize this path for your project, making sure you put data at least one folder deep.
// Your data will be published on the server to a URL like:
// https://graphics.thomsonreuters.com/data/2020/{{ projectName }}/data.json
/* ------------------------ */
const SERVER_PATH = '{{ projectName }}';

/* MAIN SCRAPER FUNCTION HERE */
const run = async() => {
  /* ------------------------ */
  // STEP 1: Fetch the data from url
  /* ------------------------ */
  const url = 'https://someapi.com/data/';
  const response = await axios.get(url);
  const rawData = await response.json();

  /* ------------------------ */
  // STEP 2: Format the data into a JSON you need
  /* ------------------------ */
  const EXPORT_DATA = await formatData(rawData);

  /* ------------------------ */
  // STEP 3: Publish the data to TR server
  /* ------------------------ */
  const filePath = `${SERVER_PATH}/data.json`;
  await publishJson(EXPORT_DATA, filePath);
};
run();

/* OTHER STUFF */
const formatData = async(data) => {
  // Some data formatting goes here
  return data;
};

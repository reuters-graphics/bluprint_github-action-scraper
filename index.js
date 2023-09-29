import d3DSV from 'd3-dsv';
import fetchData from './lib/fetchData.js';
import logger from './lib/logger.js';
import publishCSV from './lib/publishCSV.js';
import publishJSON from './lib/publishJSON.js';

/* Your data will be published on the server to a URL like:
// https://graphics.thomsonreuters.com/data/2021/{{ projectName }}/data.json
*/
const AWS_DIRECTORY = '{{ projectName }}';

/* MAIN SCRAPER FUNCTION HERE */
const run = async() => {
  /* STEP 1: Fetch the data from url */
  const url = 'https://someapi.com/data/';
  const rawData = await fetchData(url);

  /* STEP 2: Validate your data */
  await validateData(rawData);

  /* STEP 3: Format the data as you need */
  const EXPORT_DATA = await formatData(rawData);

  /* STEP 4: Publish the data to TR server */
  const fileName = 'data.json';
  await publishJSON(EXPORT_DATA, AWS_DIRECTORY, fileName);

  /* 🏁 FINALE: Log your success! */
  // Checkout message formats for Teams: https://github.com/reuters-graphics/teams-klaxon#message-formats
  await logger.log({ text: '✅ Successful scrape for {{ projectName }}!' });
};
run();

/* OTHER STUFF... (You can move these to other files, too.) */
const validateData = async(data) => {
  /* Test to make sure the data you scrape is what you expect! */
  if (Array.isArray(data)) return; // Good data!
  await logger.error({ text: '❌ OH NO! Bad data!' });
};

const formatData = async(data) => {
  /* Some data formatting goes here...
  // If the fetched file is not a JSON, you need to parse it correctly.
  // e.g. d3DSV.csvParse(data) to read CSV files.
  // https://github.com/d3/d3-dsv
  */

  return data;
};

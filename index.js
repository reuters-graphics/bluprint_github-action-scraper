const fetchData = require('./lib/fetchData');
const publishJSON = require('./lib/publishJSON');
const publishCSV = require('./lib/publishCSV');
const d3DSV = require('d3-dsv');

/* Your data will be published on the server to a URL like:
// https://graphics.thomsonreuters.com/data/2020/{{ projectName }}/data.json
*/
const AWS_DIRECTORY = '{{ projectName }}';

/* MAIN SCRAPER FUNCTION HERE */
const run = async() => {
  /* STEP 1: Fetch the data from url */
  const url = 'https://someapi.com/data/';
  const rawData = await fetchData(url);

  /* STEP 2: Format the data as you need */
  const EXPORT_DATA = await formatData(rawData);

  /* STEP 3: Publish the data to TR server */
  const fileName = 'data.json';
  await publishJSON(EXPORT_DATA, AWS_DIRECTORY, fileName);
};
run();

/* OTHER STUFF */
const formatData = async(data) => {
  /* Some data formatting goes here...
  // If the fetched file is not a JSON, you need to parse it correctly.
  // e.g. d3DSV.csvParse(data) to read CSV files.
  // https://github.com/d3/d3-dsv
  */

  return data;
};

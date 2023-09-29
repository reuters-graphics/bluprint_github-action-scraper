import axios from 'axios';
import logger from './logger.js';

export default async(url) => {
  let data;
  try {
    const response = await axios.get(url);
    data = await response.data;
  } catch (err) {
    await logger.error({ title: '⚙️ {{ projectName }}', text: '❌ Failed to fetch data' });
  }

  return data;
};

import axios from 'axios';

export default async(url) => {
  const response = await axios.get(url);
  const data = await response.data;

  return data;
};

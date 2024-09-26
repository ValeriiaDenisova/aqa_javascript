import axios from 'axios';

async function makeRequest(url, headers = {}, params = {}) {
  try {
    const response = await axios.get(url, {
      headers: headers,
      params: params,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.statusText : error.message);
  }
}

module.exports = {makeRequest};

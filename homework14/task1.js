import axios from 'axios';

async function fetchFromInvalidUrl() {
  try {
    const response = await axios.get("https://rtertretertetert")
    return response.data
  } catch (error) {
    throw new Error("Incorrect url")
  }
}

module.exports = { fetchFromInvalidUrl };

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

apiClient.interceptors.request.use(request => {
  console.log(`Request: ${request.method.toUpperCase()} ${request.url}`, request.data || '');
  return request;
}, error => {
  return Promise.reject(error);
});

apiClient.interceptors.response.use(response => {
  console.log(`Response: ${response.status} ${response.config.url}`, response.data);
  return response;
}, error => {
  return Promise.reject(error);
});

module.exports = { apiClient };


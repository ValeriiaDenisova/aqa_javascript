import { makeRequest } from './task3.js';
import axios from 'axios';

jest.mock('axios');


const mockUrl = 'https://example.com/api';

afterEach(() => {
  jest.clearAllMocks();
});

test('should return data on successful request', async () => {
  const mockResponse = { data: { message: 'Success' } };
  axios.get.mockResolvedValueOnce(mockResponse);

  const headers = { 'Authorization': 'Bearer mock-token' };
  const params = { userId: 1 };

  const response = await makeRequest(mockUrl, headers, params);

  expect(response).toEqual(mockResponse.data);

  expect(axios.get).toHaveBeenCalledWith(mockUrl, {
    headers: { 'Authorization': 'Bearer mock-token' },
    params: { userId: 1 },
  });
});

test('should throw an error on failed request', async () => {
  const mockError = {
    response: { statusText: 'Not Found' },
  };
  axios.get.mockRejectedValueOnce(mockError);

  const headers = { 'Authorization': 'Bearer mock-token' };
  const params = { userId: 1 };

  await expect(makeRequest(mockUrl, headers, params)).rejects.toThrow('Not Found');

  expect(axios.get).toHaveBeenCalledWith(mockUrl, {
    headers: { 'Authorization': 'Bearer mock-token' },
    params: { userId: 1 },
  });
});

test('should handle network error without response', async () => {
  const mockNetworkError = new Error('Network Error');
  axios.get.mockRejectedValueOnce(mockNetworkError);

  const headers = { 'Authorization': 'Bearer mock-token' };
  const params = { userId: 1 };

  await expect(makeRequest(mockUrl, headers, params)).rejects.toThrow('Network Error');

  expect(axios.get).toHaveBeenCalledWith(mockUrl, {
    headers: { 'Authorization': 'Bearer mock-token' },
    params: { userId: 1 },
  });
});

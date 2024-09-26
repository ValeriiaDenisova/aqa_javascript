import { makeRequest } from './task2.js';

const url = 'https://httpbin.org/get'; // Використовуємо httpbin для тестування запитів

test('should include custom headers and URL parameters in the request', async () => {
  const headers = {
    'Authorization': 'Bearer test-token',
    'Content-Type': 'application/json',
  };

  const params = {
    userId: 123,
    status: 'active',
  };

  const response = await makeRequest(url, headers, params);

  expect(response.headers['Authorization']).toEqual('Bearer test-token');
  expect(response.headers['Content-Type']).toEqual('application/json');
  expect(response.args.userId).toEqual('123');
  expect(response.args.status).toEqual('active');
});

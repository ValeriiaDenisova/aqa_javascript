import { fetchFromInvalidUrl } from './task1.js';

test('should throw the correct error on an invalid URL', async () => {
  await expect(fetchFromInvalidUrl()).rejects.toThrow('Incorrect url');
});

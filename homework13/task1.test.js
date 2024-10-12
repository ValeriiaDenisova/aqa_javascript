import { apiClient } from './task1.js';


describe('JSONPlaceholder API requests', () => {
  test('should fetch a list of posts (GET)', async () => {
    const response = await apiClient.get('/posts');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true); // Перевіряємо, що респонс є масивом
    expect(response.data.length).toBeGreaterThan(0); // Масив не має бути порожнім
  });

  test('should fetch a single post by ID (GET)', async () => {
    const response = await apiClient.get('/posts/1');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1); // Перевіряємо, що пост має правильний ID
    expect(response.data).toHaveProperty('title'); // Пост має мати заголовок
  });

  test('should fetch a list of users (GET)', async () => {
    const response = await apiClient.get('/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty('username'); // Перевіряємо, що користувач має username
  });

  test('should create a new post (POST)', async () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    const response = await apiClient.post('/posts', newPost);
    expect(response.status).toBe(201); // Статус для успішного створення
    expect(response.data).toHaveProperty('id'); // Перевіряємо, що пост отримав новий ID
    expect(response.data).toMatchObject(newPost); // Перевіряємо, що дані поста відповідають надісланим
  });

  test('should create a new comment (POST)', async () => {
    const newComment = {
      postId: 1,
      name: 'Test Comment',
      email: 'test@example.com',
      body: 'This is a test comment',
    };
    const response = await apiClient.post('/comments', newComment);
    expect(response.status).toBe(201); // Статус для успішного створення
    expect(response.data).toHaveProperty('id'); // Перевіряємо, що коментар отримав новий ID
    expect(response.data).toMatchObject(newComment); // Перевіряємо, що дані коментаря відповідають надісланим
  });
});

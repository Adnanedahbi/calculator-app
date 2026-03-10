const request = require("supertest");
const app = require('../index');

afterAll(() => {
  // stop the server so Jest can exit
});

describe('Calculator API', () => {
  test('adds 2 + 3', async () => {
    const res = await request(app).get('/add/2/3');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });

  test('divides 4 / 0', async () => {
    const res = await request(app).get('/divide/4/0');
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Division by zero");
  });

  test('multiplies 3 * 4', async () => {
    const res = await request(app).get('/multiply/3/4');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(12);
  });

  test('subtracts 10 - 3', async () => {
    const res = await request(app).get('/subtract/10/3');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(7);
  });
});
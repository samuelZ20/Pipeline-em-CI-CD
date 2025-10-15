const request = require('supertest');
const app = require('./app');

describe('Testes da API', () => {
  it('Deve retornar status 200 e a mensagem correta na rota principal', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toEqual(200);
    expect(response.text).toBe('Pipeline CI/CD Funcionando!');
  });
});
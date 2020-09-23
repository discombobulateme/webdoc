/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const supertest = require('supertest')
const app = require('../src/app')

// Stablish connection with backend routes/index.js
describe('Index', () => {
  it('GET request to / should give an OK status', async () => {
    const response = await supertest(app).get('/api')
    expect(response.statusCode).toBe(200)
  })
})

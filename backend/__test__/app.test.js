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

// Create an athlete
describe('Athletes endpoints', () => {
  it.only('post request to /athletes should create an athlete', async () => {
    const athleteToCreate = {
      // Date.now garanties the name is unique, as required in model
      name: `SomeName${Date.now()}`,
      age: 37,
      gender: 'Fluid',
    }

    const createdAthlete = (await request(app).post('/api/athletes').send(athleteToCreate)).body
    expect(createdAthlete.name).toBe(athleteToCreate.name)
    expect(createdAthlete.age).toBe(athleteToCreate.age)
    expect(createdAthlete.gender).toBe(athleteToCreate.gender)
  })

  it('get request to /athletes should list athletes', async () => {
    const athleteList = (await request(app).get('/athletes')).body
    const athletesExist = athleteList.length > 0

    expect(athletesExist).toBe(true)
  })
})

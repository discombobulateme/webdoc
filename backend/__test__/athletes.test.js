const request = require('supertest')
const randomEmail = require('random-email')()
const app = require('../src/app')

// add generate random name package?
// Create an athlete
describe('Athletes endpoints', () => {
  it.only('post request to /athletes should create an athlete', async () => {
    const athleteToCreate = {
      // Date.now garanties the name is unique, as required in model
      name: `SomeName${Date.now()}`,
      age: 37,
      gender: 'Fluid',
      email: `${randomEmail}`,
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

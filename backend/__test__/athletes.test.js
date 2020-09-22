const request = require('supertest')
const app = require('../src/app')
// add generate random name package?

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
    expect(createdAthlete.bio).toBe(athleteToCreate.bio)
  })

  it('get request to /athletes should list athletes', async () => {
    const athleteList = (await request(app).get('/athletes')).body
    const athletesExist = athleteList.length > 0

    expect(athletesExist).toBe(true)
  })
})

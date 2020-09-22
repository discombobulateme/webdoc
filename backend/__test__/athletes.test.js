const request = require('supertest')
const app = require('../src/app')

describe('Users endpoints', () => {
  it.only('post request to /users should create a user', async () => {
    const userToCreate = {
      name: `SomeName${Date.now()}`,
      age: 27,
      bio: 'Been There. Done That.',
    }

    const createdUser = (await request(app).post('/api/users').send(userToCreate)).body
    expect(createdUser.name).toBe(userToCreate.name)
    expect(createdUser.age).toBe(userToCreate.age)
    expect(createdUser.bio).toBe(userToCreate.bio)
  })

  it('get request to /users should list users', async () => {
    const userList = (await request(app).get('/users')).body
    const usersExist = userList.length > 0

    expect(usersExist).toBe(true)
  })

  it('user should be able to like a photo', async () => {
    // create a photo
    const photo = (await request(app).post('/photos').send({ filename: 'coyotivtestingsession.png' })).body

    // create a user
    const userWithPhoto = (
      await request(app)
        .post('/users')
        .send({
          name: `PhotoOwnerUser${Date.now()}`,
          age: 27,
          bio: 'Someone sharing photos.',
        })
    ).body

    // add the photo to that user
    await request(app).post(`/users/${userWithPhoto.id}/adds`).send({ photoId: photo.id })

    // create another user
    const likerUser = {
      name: `Liker User${Date.now()}`,
      age: 36,
      bio: 'Someone liking photos.',
    }

    const createdLikerUser = (await request(app).post('/users').send(likerUser)).body

    // like the photo with that another user
    await request(app).post(`/users/${createdLikerUser.id}/likes`).send({ photoId: photo.id })

    const finalPhotoUser = (await request(app).get(`/users/${userWithPhoto.id}/json`)).body
    console.log('-------------finalPhotoUser--', finalPhotoUser)

    const finalLikerUser = (await request(app).get(`/users/${createdLikerUser.id}/json`)).body
    console.log('-------------finalLikerUser--', finalLikerUser)

    expect(finalPhotoUser.photos.length).toBe(1)
    expect(finalLikerUser.likes.length).toBe(1)

    console.log('finalPhotoUser.photos[0].likedBy[0].id', finalPhotoUser.photos[0].likedBy[0].id)

    expect(finalPhotoUser.photos[0].likedBy[0].id).toBe(finalLikerUser.id)
    expect(finalLikerUser.likes[0]).toBe(finalPhotoUser.photos[0].id)
  })
})

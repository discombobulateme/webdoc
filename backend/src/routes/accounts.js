const express = require('express')
const passport = require('passport')
const Athlete = require('../models/athlete')

const router = express.Router()

router.get('/session', (req, res) => {
  res.send(req.session)
})

router.post('/', async (req, res) => {
  const { name, age, email, password } = req.body

  const athlete = new Athlete({ name, age, email })
  await athlete.setPassword(password)
  await athlete.save()

  return athlete
})

// login mechanism: create a session and logout: delete it
router.post('/session', passport.authenticate('local', { failWithError: true }), async (req, res) => {
  res.send(req.athlete)
})

router.delete('/session', async (req, res, next) => {
  await req.logout()

  req.session.regenerate(err => {
    if (err) return next(err)

    return res.sendStatus(200)
  })
})

module.exports = router

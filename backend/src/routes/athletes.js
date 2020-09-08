const express = require('express')

const router = express.Router()

const Athlete = require('../models/athlete')
const Jump = require('../models/jump')
const Place = require('../models/place')
// const JumpLog = require('../models/jump-log')

/* GET athletes listing. */
router.get('/', async (req, res) => {
  res.send(await Athlete.find())
})

router.get('/initialize', async (req, res) => {
  // this format is required to use passport middleware
  const paloma = new Athlete({ name: 'paloma', age: 37, email: 'p@p.com' })
  await paloma.setPassword('test')
  await paloma.save()

  const kim = new Athlete({ name: 'kim', age: 42, email: 'k@k.com' })
  await kim.setPassword('test')
  await kim.save()

  const julia = new Athlete({ name: 'julia', age: 35, email: 'j@j.com' })
  await julia.setPassword('test')
  await julia.save()

  const kjerag = await Place.create({ name: 'Kjerag', modality: 'E' })
  const palomasJump = await Jump.create({
    modality: 'E',
    place: kjerag,
    owner: paloma,
    description: '1000m mountains in the south Norwegian',
  })

  await paloma.jump(palomasJump)
  await kim.jump(palomasJump)
  await julia.jump(palomasJump)

  await paloma.logJump(palomasJump, 'That was fabulous!')

  res.send('Athletes page happy')
})

router.get('/:id', async (req, res) => {
  res.send(await Athlete.findById(req.params.id))
})

module.exports = router

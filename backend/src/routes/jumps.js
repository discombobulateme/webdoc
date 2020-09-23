const express = require('express')

const router = express.Router()

const Jump = require('../models/jump')
const Place = require('../models/place')
// const JumpLog = require('../models/jump-log')

/* GET jumps listing. */
router.get('/', async (req, res) => {
  res.send(await Jump.find())
})

/* POST create a jump */
router.post('/', async (req, res) => {
  const createdJump = await Jump.create(req.body)
  res.send(createdJump)
})

router.get('/initialize', async (req, res) => {
  const paloma = new Jump({ name: 'paloma', age: 37, email: 'p@p.com' })
  await paloma.save()

  const kjerag = await Place.create({ name: 'Kjerag', modality: 'E' })
  const palomasJump = await Jump.create({
    modality: 'E',
    place: kjerag,
    owner: paloma,
    description: '1000m mountains in the south Norwegian',
  })

  await paloma.jump(palomasJump)

  await paloma.logJump(palomasJump, 'That was fabulous!')

  res.send('Jumps page happy')
})

router.get('/:id', async (req, res) => {
  res.send(await Jump.findById(req.params.id))
})

module.exports = router

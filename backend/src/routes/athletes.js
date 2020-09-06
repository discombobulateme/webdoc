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

  const palomasJump = await paloma.jump('E', 'Kjerag')

  await kim.jump(palomasJump)
  await julia.jump(palomasJump)

  res.send('Athletes page happy')
})

router.get('/:id', async (req, res) => {
  res.send(await Athlete.findById(req.params.id))
})

module.exports = router

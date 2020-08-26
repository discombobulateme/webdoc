const express = require('express')

const router = express.Router()
const Athlete = require('../models/athlete')

/* GET athletes listing. */
router.get('/', async (req, res) => {
  res.send(await Athlete.find())
})

router.get('/initialize', async (req, res) => {
  console.log('***** initializing *****')

  const palomaObj = { name: 'paloma', password: '123', email: 'p@p.com', age: 37 }
  const kimObj = { name: 'kim', password: '123', email: 'k@k.com', age: 40 }
  const juliaObj = { name: 'julia', password: '123', email: 'j@j.com', age: 35 }

  const paloma = await Athlete.findOneAndUpdate(palomaObj, palomaObj, { upsert: true, new: true })
  const kim = await Athlete.findOneAndUpdate(kimObj, kimObj, { upsert: true, new: true })
  const julia = await Athlete.findOneAndUpdate(juliaObj, juliaObj, { upsert: true, new: true })

  const palomasJump = await paloma.jump('E', 'Kjerag')

  await kim.jump(palomasJump)
  await julia.jump(palomasJump)

  res.send('Athletes page happy')
})

router.get('/:id', async (req, res) => {
  res.send(await Athlete.findById(req.params.id))
})

module.exports = router

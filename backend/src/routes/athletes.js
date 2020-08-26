const express = require('express')

const router = express.Router()
const Athlete = require('../models/athlete')

/* GET athletes listing. */
router.get('/', async (req, res, next) => {
  res.send(await Athlete.find())
})

router.get('/initialize', async (req, res, next) => {
  console.log('***** initializing *****')
  const paloma = { name: 'paloma', password: '123', email: 'p@p.com', age: 37 }

  await paloma.jump('E', Date, 'Kjerag')

  res.send('Athletes page happy')
})

router.get('/:id', async (req, res, next) => {
  res.send(await Athlete.findById(req.params.id))
})

module.exports = router

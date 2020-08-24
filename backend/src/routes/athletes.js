const express = require('express')

const router = express.Router()

// const Athlete = require('../models/athlete')

/* GET athletes listing. */
router.get('/', (req, res) => {
  // const paloma = await Athlete.create({ name: 'paloma', password: '123', email: 'p@p.com' })
  res.send('Here is the Athletes Page!!!')
})

// const supporter = await Supporter.create({
//   people: [
//     {
//       name: 'Olav',
//       age: 65,
//     },
//   ],
//   howSupports: 'offers different places to stay, from camping to hotel, food and work exchange among jumpers',
// })
// const place = await Place.create({
//   name: 'Lysebotn',
//   coordinates: [59.034669, 6.5599697],
//   modality: 'e',
//   height: 1000,
//   landing: 'small gras with lots of rocks or nord sea water',
//   supporter,
// })
// const athlete = await Athlete.create({
//   name: 'paloma',
//   password: '123',
//   email: 'p@p.com',
//   age: 37,
//   gender: 'she',
// })
// const jump = await Jump.create({
//   modality: 'E',
//   athletes: [athlete],
//   place: [place],
//   date: new Date(),
//   description: 'Classic Norwegian mountain',
//   logs: [],
// })
// const jumpLog = await Jump.create({
//   owner: [athlete],
//   jump,
//   athletes: [athlete],
//   place,
//   date: new Date(),
//   description: 'Classic Norwegian mountain',
//   logs: [],
// })

// http://localhost:3000/users/paloma
// router.get('/:athleteId', function (req, res, next) {
//   res.send(athletes[req.params.athleteId])
// })

module.exports = router

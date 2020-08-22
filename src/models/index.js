const Athlete = require('./athlete')
const Jump = require('./jump')
const JumpLog = require('./jump-log')
const Place = require('./place')
const Supporter = require('./supporter')

Jump.create({
  modality: 'B',
  athletes: [],
  place: 'Kjerag',
  date: new Date(),
  description: 'Classic Norwegian mountain',
  logs: [],
})

const jump200 = new JumpLog(Jump, 'This was an amazing jump, a 2 way with Rima')
const kjerag = new Place(
  'Lysebotn',
  [59.034669, 6.5599697],
  'e',
  1000,
  'small gras with lots of rocks or nord sea water'
)
const paloma = new Athlete('paloma', '123', 'p@p.com', ['ruy', 'poncho'], Jump, jump200, kjerag, 37, 'she', 'hello')
const olav = new Supporter(
  paloma,
  kjerag,
  ['Olav', 'Kristina', 'Stein'],
  'offers different places to stay, from camping to hotel, food and work exchange among jumpers'
)

console.log(Jump)
console.log(jump200)
console.log(kjerag)
console.log(paloma)
console.log(olav)

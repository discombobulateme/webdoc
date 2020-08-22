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

JumpLog.create({
  jump: Jump,
  text: 'This was an amazing jump, a 2 way with Rima',
  attachments: [],
})

Place.create({
  name: 'Lysebotn',
  coordinates: [59.034669, 6.5599697],
  modality: 'e',
  height: 1000,
  landing: 'small gras with lots of rocks or nord sea water',
  supporter: Supporter,
})

Athlete.create({
  name: 'paloma',
  password: '123',
  email: 'p@p.com',
  athletes: ['Ruy Fernandes', 'Caco'],
  jump: Jump,
  jumpLogs: JumpLog,
  places: ['Lysebotn', 'Pedra de Onça'],
  age: 37,
  gender: 'she',
})

Supporter.create({
  athlete: Athlete,
  place: Place,
  people: ['Olav', 'Kristina', 'Stein'],
  howSupports: 'offers different places to stay, from camping to hotel, food and work exchange among jumpers',
})

console.log(Jump)

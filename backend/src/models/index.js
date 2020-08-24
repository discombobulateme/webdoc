const Athlete = require('./athlete')
const Jump = require('./jump')
const Place = require('./place')
const Supporter = require('./supporter')

async function main() {
  const supporter = await Supporter.create({
    people: [
      {
        name: 'Olav',
        age: 65,
      },
    ],
    howSupports: 'offers different places to stay, from camping to hotel, food and work exchange among jumpers',
  })
  const place = await Place.create({
    name: 'Lysebotn',
    coordinates: [59.034669, 6.5599697],
    modality: 'e',
    height: 1000,
    landing: 'small gras with lots of rocks or nord sea water',
    supporter,
  })
  const athlete = await Athlete.create({
    name: 'paloma',
    password: '123',
    email: 'p@p.com',
    age: 37,
    gender: 'she',
  })
  const jump = await Jump.create({
    modality: 'E',
    athletes: [athlete],
    place: [place],
    date: new Date(),
    description: 'Classic Norwegian mountain',
    logs: [],
  })
  const jumpLog = await Jump.create({
    owner: [athlete],
    jump,
    athletes: [athlete],
    place,
    date: new Date(),
    description: 'Classic Norwegian mountain',
    logs: [],
  })

  athlete.addJumpLog(jumpLog)
}
main()

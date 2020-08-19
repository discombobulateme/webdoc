const mongoose = require('mongoose')

const athlete = require('./athlete')
const place = require('./place')

const supporterSchema = new mongoose.Schema({
  athlete: athleteSchema,
  place: placeSchema,
  people: [],
  howSupports: String,
})

module.exports = mongoose.model('Supporter', supporterSchema)

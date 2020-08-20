const mongoose = require('mongoose')

const athleteSchema = require('./athlete')
const placeSchema = require('./place')

const supporterSchema = new mongoose.Schema({
  athlete: athleteSchema,
  place: placeSchema,
  people: [],
  howSupports: String,
})

module.exports = mongoose.model('Supporter', supporterSchema)

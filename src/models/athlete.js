const mongoose = require('mongoose')

const jump = require('./jump')
const place = require('./place')

const athleteSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  instructor: {
    athlete: athleteSchema,
    required: true,
  },
  jumps: {
    jump: jumpSchema,
    required: true,
  },
  places: {
    place: placeSchema,
  },

  age: Number,
  gender: String,
})

module.exports = mongoose.model('Athlete', athleteSchema)

const mongoose = require('mongoose')

const athlete = require('./athlete')
const diary = require('./diary-entry')
const jump = require('.')
const place = require('./place')

const jumpSchema = new mongoose.Schema({
  modality: {
    type: String,
    enum: ['BASE', 'base'],
    required: function() {
      if(modalities.includes(modality)) {
      return modality
      throw 'You must type one of the objects: b as building, a as antenna, s as span or e as earth'
    }
  },
  athlete: {
    athlete: athleteSchema,
    required: true,
  },
  date: {
    date: Date,
    required: true,
  },
  place: {
    place: placeSchema,
    required: true,
  },

  description: String,
  diaryEntries: diarySchema,
})

module.exports = mongoose.model('Jump', jumpSchema)

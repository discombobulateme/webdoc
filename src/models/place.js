const mongoose = require('mongoose')

const modality = require('./jump')

const placeSchema = new mongoose.Schema({
  placeName: String,
  coordinates: [Number, Number],
  modality: {
    jumpSchema: { modality },
  },
  height: Number,
  landing: String,
})

module.exports = mongoose.model('Place', placeSchema)

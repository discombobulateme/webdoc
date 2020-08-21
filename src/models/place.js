const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: String,
  coordinates: [Number, Number],
  // Remember to update also im Jump, if change is needed
  modality: {
    enum: ['B', 'A', 'S', 'E', 'b', 'a', 's', 'e'],
    message: 'Status is required.',
  },
  height: Number,
  landing: String,
})

module.exports = mongoose.model('Place', placeSchema)

const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  coordinates: [Number, Number],
  // Remember to update also im Jump, if change is needed
  modality: {
    type: String,
    enum: ['B', 'A', 'S', 'E', 'b', 'a', 's', 'e'],
    message: 'Status is required.',
    required: true,
  },
  height: Number,
  landing: String,
  supporters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Supporter',
    },
  ],
})

module.exports = mongoose.model('Place', placeSchema)

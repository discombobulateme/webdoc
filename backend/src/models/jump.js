const mongoose = require('mongoose')

const jumpSchema = new mongoose.Schema({
  modality: {
    type: String,
    enum: ['B', 'A', 'S', 'E', 'b', 'a', 's', 'e'],
    message: 'Status is required.',
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
    // required: true,
  },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Place',
    required: true,
  },
  athletes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Athlete',
    },
  ],
  description: String,
  logs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'JumpLog',
    },
  ],
})

module.exports = mongoose.model('Jump', jumpSchema)

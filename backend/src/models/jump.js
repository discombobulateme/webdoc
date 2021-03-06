const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const jumpSchema = new mongoose.Schema({
  modality: {
    type: String,
    enum: ['B', 'A', 'S', 'E', 'b', 'a', 's', 'e'],
    message: 'Status is required.',
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Athlete',
    required: true,
  },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Place',
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
    // required: true,
  },
  athletes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Athlete',
      autopopulate: true,
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

jumpSchema.plugin(autopopulate)

module.exports = mongoose.model('Jump', jumpSchema)

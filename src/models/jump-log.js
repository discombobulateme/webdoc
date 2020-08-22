const mongoose = require('mongoose')

const jumpLogSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Athlete',
    required: true,
  },
  jumps: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Jump',
    required: true,
  },
  text: {
    type: String,
    required: true,
  },

  attachment: [],
})

module.exports = mongoose.model('JumpLog', jumpLogSchema)

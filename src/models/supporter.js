const mongoose = require('mongoose')

const supporterSchema = new mongoose.Schema({
  athletes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Athlete',
    },
  ],
  places: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Place',
    },
  ],
  // This is a child
  people: [
    {
      name: String,
      age: Number,
    },
  ],
  howSupports: String,
})

module.exports = mongoose.model('Supporter', supporterSchema)

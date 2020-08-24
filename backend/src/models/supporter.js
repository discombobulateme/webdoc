const mongoose = require('mongoose')

const supporterSchema = new mongoose.Schema({
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

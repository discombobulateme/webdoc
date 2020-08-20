const mongoose = require('mongoose')

const jumpSchema = require('./jump')

const diarySchema = new mongoose.Schema({
  jumps: {
    jump: jumpSchema,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },

  attachment: [],
})

module.exports = mongoose.model('DiaryEntry', diarySchema)

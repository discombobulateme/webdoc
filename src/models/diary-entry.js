const mongoose = require('mongoose')

const jump = require('./jump')

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

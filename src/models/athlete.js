const mongoose = require('mongoose')

const athleteSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  instructors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Athlete',
    },
  ],
  jumps: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Jump',
    },
  ],
  jumpLogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'JumpLog',
    },
  ],
  places: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Place',
    },
  ],

  age: Number,
  gender: String,
})
class Athlete {
  async addJumpLog(log) {
    this.logs.push(log)

    await log.save()
    await this.save()
  }
}

athleteSchema.loadClass(Athlete)

module.exports = mongoose.model('Athlete', athleteSchema)

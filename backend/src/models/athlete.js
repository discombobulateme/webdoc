const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const Jump = require('./jump')
const JumpLog = require('./jump-log')

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
      autopopulate: { maxDepth: 3 },
    },
  ],
  jumpLogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'JumpLog',
    },
  ],
  age: Number,
  gender: String,
})
class Athlete {
  async jump(modality, place) {
    const jump = await Jump.create({
      name: this,
      modality,
      // date,
      place,
    })

    await jump.save()
    await this.save()
  }

  async jumpLog(jump) {
    const jumpLog = await JumpLog.create({
      name: this,
      jump,
    })
    this.jumpLogs.push(jumpLog)

    await jumpLog.save()
    await this.save()
  }
}

athleteSchema.loadClass(Athlete)
athleteSchema.plugin(autopopulate)

module.exports = mongoose.model('Athlete', athleteSchema)

const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')

const Jump = require('./jump')
const JumpLog = require('./jump-log')

const athleteSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
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
      autopopulate: { maxDepth: 2 },
    },
  ],
  jumpLogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'JumpLog',
      autopopulate: true,
    },
  ],
  age: Number,
  gender: String,
})
class Athlete {
  async jump(jump) {
    this.jumps.push(jump)
    jump.athletes.push(this)
    await jump.save()
    await this.save()
  }

  async logJump(jump, text) {
    const logJump = await JumpLog.create({
      owner: this,
      jump,
      text,
    })
    this.logJumps.push(logJump)

    await logJump.save()
    await this.save()
  }
}

athleteSchema.loadClass(Athlete)
athleteSchema.plugin(autopopulate)
athleteSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
})

module.exports = mongoose.model('Athlete', athleteSchema)

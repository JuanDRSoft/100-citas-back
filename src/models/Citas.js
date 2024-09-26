var mongoose = require('mongoose')

const CitaSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: false,
      trim: true
    }
  },
  {
    timestamps: true
  }
)

const Cita = mongoose.model('Citas', CitaSchema)
module.exports = Cita

const Cita = require('../models/Citas')

const newCita = async (req, res) => {
  const cita = new Cita(req.body)

  try {
    const citaAlmacenado = await cita.save()
    res.json(citaAlmacenado)
  } catch (error) {
    console.log(error)
  }
}

const getCitas = async (req, res) => {
  const citas = await Cita.find()
  res.json(citas)
}

module.exports = {
  newCita,
  getCitas
}

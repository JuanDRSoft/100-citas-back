var express = require('express')
var router = express.Router()

const vacunaController = require('../controllers/citasController.js')

router.route('/').post(vacunaController.newCita).get(vacunaController.getCitas)

module.exports = router

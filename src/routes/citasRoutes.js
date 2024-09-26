var express = require('express')
var router = express.Router()

const citasController = require('../controllers/citasController.js')

router.route('/').post(citasController.newCita).get(citasController.getCitas)

module.exports = router

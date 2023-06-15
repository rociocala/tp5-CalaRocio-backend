//defino controlador para el manejo de CRUD
const transaccionCtrl = require('./../controllers/transaccion.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/', transaccionCtrl.getTransacciones); // http://localhost:3000/api/transaccion/
router.post('/', transaccionCtrl.createTransaccion);
router.get('/:emailCliente', transaccionCtrl.getHistorialTransaccion);
router.get('/moneda', transaccionCtrl.getDivisas);

//exportamos el modulo de rutas
module.exports = router;
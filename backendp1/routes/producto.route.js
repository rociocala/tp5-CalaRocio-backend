//defino controlador para el manejo de CRUD
const productoCtrl = require('./../controllers/producto.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/', productoCtrl.getProductos); // http://localhost:3000/api/producto/
router.post('/', productoCtrl.createProducto);
router.get('/destacado', productoCtrl.getProdu);
router.put('/:id', productoCtrl.editProducto);
router.delete('/:id', productoCtrl.deleteProducto);
router.get('/:id', productoCtrl.getProducto);
//exportamos el modulo de rutas
module.exports = router;
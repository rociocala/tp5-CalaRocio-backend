const Producto = require('../models/producto');

//get - buscar los productos
const productoCtrl = {}
productoCtrl.getProductos = async (req, res) => {    //req= es la solcitud q viene del fronted(parametros ,header,body)
    var productos = await Producto.find();
    res.json(productos);
}

//post- dar de alta un producto
productoCtrl.createProducto = async (req, res) => {
    var producto = new Producto(req.body);
    try {
        await producto.save();
        res.status(200).json({// status(200) para q sea explicito,aunq si no lo pongo ya de por si toma el 200
            'status': '1',
            'msg': 'Producto guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

// get- buscar productos destacados
productoCtrl.getProdu = async (req, res) => {
    const produ = await Producto.find({destacado: true});
    res.json(produ);
}

//put-modificar
productoCtrl.editProducto = async (req, res) => {
    const vproducto = new Producto(req.body);
    try {
        await Producto.updateOne({ _id: req.body._id }, vproducto);
        res.json({
            'status': '1',
            'msg': 'Producto updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

//delete-borrar
productoCtrl.deleteProducto = async (req, res) => {
    try {
        await Producto.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Producto removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

productoCtrl.getProducto = async (req, res) => {    //req= es la solcitud q viene del fronted(parametros ,header,body)
    var productoo = await Producto.findById(req.params.id);
    res.json(productoo);
}

module.exports = productoCtrl;
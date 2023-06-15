const Transaccion = require('../models/transaccion');

const transaccionCtrl = {}

//get --Recuperar TODAS las Transacciones Registradas
transaccionCtrl.getTransacciones = async (req, res) => {    //req= es la solcitud q viene del fronted(parametros ,header,body)
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}

//post- de alta una Transaccion(POST)
transaccionCtrl.createTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.status(200).json({// status(200) para q sea explicito,aunq si no lo pongo ya de por si toma el 200
            'status': '1',
            'msg': 'Transaccion guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}


// get- -Recuperar el histórico de transacciones de un determinado cliente (GET), utilizar email como clave
transaccionCtrl.getHistorialTransaccion = async (req, res) => {
    const historial = await Transaccion.find({emailCliente : req.params.emailCliente});
    res.json(historial);
}


//get - Recuperar TODAS las Transacciones que tengan como origen y destino las divisas (monedas) recibidas como
transaccionCtrl.getDivisas = async (req, res) => {    //req= es la solcitud q viene del fronted(parametros ,header,body)
    let recuperar ={}
    if (req.query.origen != null && req.query.origen !=""){
        recuperar.monedaOrigen = req.query.origen;
    }
    if (req.query.destino != null && req.query.destino !=""){
        recuperar.monedaDestino = req.query.destino;
    }
    var divisas = await Transaccion.find(recuperar);
    res.json(divisas);


}

module.exports = transaccionCtrl;
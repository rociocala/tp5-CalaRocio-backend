const Espectador = require('../models/espectador');

//get - buscar todos los espectadores
const espectadorCtrl = {}
espectadorCtrl.getEspectadores = async (req, res) => {    //req= es la solcitud q viene del fronted(parametros ,header,body)
    var espectadores = await Espectador.find();
    res.json(espectadores);
}

//post- dar de alta 
espectadorCtrl.createEspectador = async (req, res) => {
    var espectador = new Espectador(req.body);
    try {
        await espectador.save();
        res.status(200).json({// status(200) para q sea explicito,aunq si no lo pongo ya de por si toma el 200
            'status': '1',
            'msg': 'Espectador guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

// get- buscar un producto
espectadorCtrl.getUnEspectador = async (req, res) => {
    const unEspectador = await Espectador.find({dni : req.params.dni });
    res.json(unEspectador);
}

module.exports = espectadorCtrl;
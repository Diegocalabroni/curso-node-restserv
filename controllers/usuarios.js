const { response } = require('express')

const getUsuarios = (req, res = response)=> {

    const {q, nombre = 'no name', apikey, page=3 } =req.query;
    
    res.json({
        msg: 'Get API - controlador',
        q,
        nombre,
        apikey,
        page
        
    });
}


const putUsuario = (req, res = response)=> {
    const {id} = req.params;
    res.status(400).json({
        msg: 'Put API - controlador',
        id
    });
}

const postUsurio = (req, res = response)=> {
    const {nombre, edad} = req.body;

    res.json({
        msg: 'Post API - controlador',
        nombre,
        edad
    });
}

const deleteUsuario = (req, res = response)=> {
    res.json({
        msg: 'Delete API - controlador'
    });
}


module.exports = {
    getUsuarios,
    putUsuario,
    postUsurio,
    deleteUsuario
}
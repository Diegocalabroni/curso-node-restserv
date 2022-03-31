const express = require('express');

var cors = require('cors')



class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.pathUsuarios = '/api/usuarios'

        
         
        //MIDDLEWARES
        this.middlewares()

        
        //RUTAS DE MI APLICACION
        this.routes();
    }

    middlewares(){

        //CORS
        this.app.use(cors());

        //lectura y parseo de la informacon 
        this.app.use(express.json())
        
        this.app.use( express.static('public'))
    }

    routes() {
        
        this.app.use(this.pathUsuarios, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.port, ()=> {
            console.log('Servidor corriendo en puerto', this.port)
        });
    }
}

module.exports = Server;
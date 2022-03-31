const { Router } = require('express');
const { getUsuarios,
        putUsuario, 
        postUsurio, 
        deleteUsuario } = require('../controllers/usuarios');

const router = Router();

router.get('/', getUsuarios)

router.put('/:id?', putUsuario)

router.post('/', postUsurio)

router.delete('/', deleteUsuario)




module.exports = router;
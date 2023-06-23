const { Router } = require('express');
const tipoUsuarioController = require('../controller/tipoUsuarioController');

const router = Router();

router
    .post('/tipo-usuario', tipoUsuarioController.cadastrar)
    .get('/tipo-usuario', tipoUsuarioController.listarTiposUsuarios)
    .get('/tipo-usuario/:id', tipoUsuarioController.listarUmTiposUsuario)
    .put('/tipo-usuario/:id')
    .delete('/tipo-usuario/:id')

module.exports = router
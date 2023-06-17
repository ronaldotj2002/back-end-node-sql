const {Router} = require('express');
const UsuarioController = require('../controller/UsuarioController');

const router = Router();

router
    .post('/usuarios', UsuarioController.criarUsuario)
    .get('/usuarios', UsuarioController.listarUsuarioAll)
    .get('/usuarios/id/:id', UsuarioController.listarUmUsuario)
    .put('/usuarios/id/:id')
    .delete('/usuarios/id/:id')


    module.exports = router
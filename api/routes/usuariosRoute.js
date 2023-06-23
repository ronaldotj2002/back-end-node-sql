const {Router} = require('express');
const UsuarioController = require('../controller/UsuarioController');
const autenticacao = require('../middleware/auth');

const router = Router();

router.use(autenticacao)
router
    .post('/usuarios', UsuarioController.cadastrar)
    .get('/usuarios', UsuarioController.listarUsuarioAll)
    .get('/usuarios/id/:id', UsuarioController.listarUmUsuario)
    .put('/usuarios/id/:id')
    .delete('/usuarios/id/:id')


    module.exports = router
const {Router} = require('express');
const UsuarioController = require('../controller/UsuarioController');
const autenticacao = require('../middleware/auth');

const router = Router();

router
    .post('/usuarios', UsuarioController.cadastrar)
    
    router.use(autenticacao) // Obrigatório a autenticação para as rotas abaixo
    
    .get('/usuarios', UsuarioController.listarUsuarioAll)
    .get('/usuarios/id/:id', UsuarioController.listarUmUsuario)
    .put('/usuarios/id/:id', UsuarioController.atualizar)
    .delete('/usuarios/id/:id', UsuarioController.excluir)


    module.exports = router
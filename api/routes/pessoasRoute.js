const {Router} = require('express');
const PessoaController = require('../controller/PessoaController');

const router = Router();

router
    .get('/pessoas', PessoaController.listarPessoasAll)
    .get('/pessoas/:id', PessoaController.listarUmaPessoa)

module.exports = router
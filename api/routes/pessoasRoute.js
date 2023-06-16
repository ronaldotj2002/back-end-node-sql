const {Router} = require('express');
const PessoaController = require('../controller/PessoaController');


const router = new Router();

router.get('/pessoas', PessoaController.listarPessoasAll);
router.get('/pessoas/:id', PessoaController.listarUmaPessoa);

module.exports = router
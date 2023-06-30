const { Router } = require('express');
const InscricaoController = require('../controller/InscricaoController')

const router = new Router();


router
    .get('/inscricoes', InscricaoController.listar)
    .get('/inscricoes/id/:id', InscricaoController.filtrar)
    .post('/inscricoes/:id', InscricaoController.novaInscricao)
    .delete('/inscricoes/id/:id', InscricaoController.deletarInscricao)


module.exports = router
const { Router } = require('express');
const CursosController = require('../controller/CursosController');

const router = Router();

router
    .get('/cursos', CursosController.listar)
    .get('/cursos/id/:id', CursosController.filtrar)
    .get('/cursos/disponiveis', CursosController.cursoDisponiveis)
    .post('/cursos', CursosController.cadastrar)
    .put('/cursos/id/:id', CursosController.editar)
    .delete('/cursos/id/:id', CursosController.deletar)


    module.exports = router
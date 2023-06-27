const { Router } = require('express');
const CursosController = require('../controller/CursosController');

const router = Router();

router
    .get('/cursos', CursosController.listar)
    .get('/cursos/id/:id', CursosController.filtrar)
    .post('/cursos', CursosController.cadastrar)
    .put('/cursos/id/:id', CursosController.editar)


    module.exports = router
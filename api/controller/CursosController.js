const database = require('../models');
const CursosService = require('../service/cursosService');
const cusosService = require('../service/cursosService');

class CursosController {

    static async listar(req, res) {
        console.info("Iniciando a lista de Cursos..")
        try {
            const cursos = await cusosService.listarCursos();
            return res.status(200).json(cursos);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async filtrar(req, res) {
        const { id } = req.params;
        console.info("Iniciando o filtro de Cursos..")
        try {
            const cursos = await cusosService.filtrarCursos(id);
            return res.status(200).json(cursos);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async cadastrar(req, res) {

        console.info("Iniciando o cadastro de Cursos..")

        const body = req.body;
        try {
            const cursos = await cusosService.cadastrarCursos(body);
            return res.status(200).json(cursos);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async editar(req, res) {

        const body = req.body
        const { id } = req.params;
        try {
            const editarCurso = await CursosService.editarCurso(body, id)
            return res.status(200).json(editarCurso);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = CursosController
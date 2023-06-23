const database = require('../models')
const TipoUsuarioService = require('../service/tipoUsuarioService');

const tipoUsuarioService = new TipoUsuarioService();

class TipoUsuarioController {

    static async cadastrar(req, res) {
        const {nome, descricao} = req.body;

        try {
            const tipoUsuario = await tipoUsuarioService.cadastrar({nome, descricao})
            res.status(201).send(tipoUsuario)
        } catch(err) {
            res.status(400).send({message: err.message})
        }

    }

    static async listarTiposUsuarios(req, res) {
        try {
            const listarTpUsuarios = await database.TipoUsuario.findAll();
            return res.status(200).json(listarTpUsuarios);

        } catch (err) {
            return res.status(500).json(err.message);
        } finally {

        }

    }

    static async listarUmTiposUsuario(req, res) {
        const { id } = req.params;
        try {
            const listarTpUsuarios = await database.TipoUsuario.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(listarTpUsuarios);

        } catch (err) {
            return res.status(500).json(err.message);
        } finally {

        }

    }

}

module.exports = TipoUsuarioController
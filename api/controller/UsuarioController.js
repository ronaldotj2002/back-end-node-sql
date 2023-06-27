const database = require('../models');
const UsuarioService = require('../service/usuarioService');

const usuarioService = new UsuarioService();

class UsuarioController {

    static async listarUsuarioAll(req, res) {
        try {
            const carregarUsuarios = await UsuarioService.listarUsuarios()
            return res.status(201).send(carregarUsuarios) 
        } catch (err) {
            return res.status(500).json(err.message);
        } finally {

        }

    }

    static async listarUmUsuario(req, res) {

        const { id } = req.params;
        try {
            const usuario = await UsuarioService.filtrarUsuario(id)
            return res.status(200).json(usuario);
            
          } catch (err) {
            return res.status(500).json(err.message);
        } finally {

        }

    }

    static async cadastrar(req, res) {
        const {nome, login, email, role, senha} = req.body;
        
        try {
            const usuario = await usuarioService.criarUsuario({nome, login, email, role, senha})
            res.status(201).send(usuario)

        } catch (err) {
            res.status(400).json({ message: err.message});
        }

    }

    static async atualizar(req, res) {

        const { id } = req.params;
        
        const body = req.body;
        
        try {
            const usuario = await usuarioService.atualizaUsuario(body, id)
            res.status(200).send(usuario)

        } catch (err) {
            res.status(400).json({ message: err.message});
        }

    }

    static async excluir(req, res) {

        const { id } = req.params

        try {
            const usuario = await usuarioService.deletarUsuario(id)
            res.status(200).send(usuario)
        } catch (err) {
            res.status(400).json({ message: err.message});
        }
    }

}


module.exports = UsuarioController
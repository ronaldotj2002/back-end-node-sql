const database = require('../models');
const UsuarioService = require('../service/usuarioService');

const usuarioService = new UsuarioService();

class UsuarioController {

    static async listarUsuarioAll(req, res) {
        try {
            const listarUsuarios = await database.Usuarios.findAll();
            return res.status(200).json(listarUsuarios);

        } catch (err) {
            return res.status(500).json(err.message);
        } finally {

        }

    }

    static async listarUmUsuario(req, res) {

        const { id } = req.params;
        try {
            const filtrarUsuario = await database.Usuarios.findOne({ 
                where: { 
                    id: Number(id)
                } 
            });            
            return res.status(200).json(filtrarUsuario);

        } catch (err) {
            return res.status(500).json(err.message);
        } finally {

        }

    }

    static async cadastrar(req, res) {
        const {login, email, senha} = req.body;

        
        try {
            const usuario = await usuarioService.criarUsuario({login, email, senha})
            res.status(201).send(usuario)

        } catch (err) {
            res.status(400).json({ message: err.message});
        }

    }

}


module.exports = UsuarioController
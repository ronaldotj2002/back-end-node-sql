const database = require('../models');
const { hash } = require('bcryptjs');
const uuid = require('uuid');

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

    static async criarUsuario(req, res) {

        const novoUsuario = req.body
        console.log("==>", novoUsuario);
        try {
            const login = await database.Usuarios.findOne({ 
                where: { 
                    login: novoUsuario.login
                } 
            });    
            
            if(login) {
                throw new Error('Este Login já exista na Base de Dados')
            }            

            // const senhaCript = await hash(req.senha, 8)
            const usuarioCriado = await database.Usuarios.create(novoUsuario)
            
            return res.status(200).json(usuarioCriado);

        } catch (err) {
            return res.status(500).json(err.message);
        } finally {

        }

    }

}


module.exports = UsuarioController
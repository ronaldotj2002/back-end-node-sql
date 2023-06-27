const database = require('../models');
const { compare } = require('bcryptjs');
const  token  = require('jsonwebtoken');
const  fileSecret  = require('../config/jsonSecret');

class AuthService {

    async login(dados) {
        console.log("DADOS LOGIN", dados)
        console.info("Iniciando o Login..");
        
        const usuario = await database.Usuarios.findOne({
            attributes: ['id', 'login', 'senha'],
            where: {
                login: dados.login
            }
        })

        if(!usuario) {
            throw new Error('usuário não cadastrado no sistema!')
        }

        const verificarSenha = await compare(dados.senha, usuario.senha)
        

             if(!verificarSenha) {
            throw new Error('Usuário ou senha inválido!')
        }

        const accessToken = token.sign({
            id: usuario.dataValues.id,
            login: usuario.dataValues.login
        }, fileSecret.secret, {
            expiresIn: 86400 // O token expira em 24h
        })
        
        return { accessToken }
            
    }

}

module.exports = AuthService
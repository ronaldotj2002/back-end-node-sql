const database = require('../models');
const { compare } = require('bcryptjs');
const  token  = require('jsonwebtoken');
const  fileSecret  = require('../config/jsonSecret');

class AuthService {

    async login(dados) {
        
        const usuario = await database.Usuarios.findOne({
            attributes: ['id', 'login', 'senha'],
            where: {
                login: dados.login
            }
        })

        if(!usuario) {
            throw new Error('usuário não cadastrado no sistema!')
        }
console.log("dados", dados.senha)
console.log("usuario ==>", usuario.senha)
        const verificarSenha = await compare(dados.senha, usuario.senha)
        console.log("===> verificarSenha", verificarSenha)

             if(!verificarSenha) {
            throw new Error('Usuário ou senha inválido!')
        }

        const accessToken = token.sign({
            id: usuario.dataValues.id,
            login: usuario.dataValues.login
        }, fileSecret.secret, {
            expiresIn: 86400
        })
        
        return { accessToken }
            
       

       
            // res.status(401).send({ message: err.message })
    
    }

}

module.exports = AuthService
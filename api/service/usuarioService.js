const database = require('../models')
const hash  = require('bcryptjs');
const uuid = require('uuid');

class UsuarioService {
    
    async criarUsuario(dados) { 

        const novoUsuario = dados
        console.log("==>", novoUsuario);

        const login = await database.Usuarios.findOne({ 
            where: { 
                login: novoUsuario.login
            } 
        });    
        
        if(login) {
            throw new Error('Este Login já existe na Base de Dados')
        }
        
        try {

            //senha criptografada
            const senhaCript = await hash(novoUsuario.senha, 8)
            
            const usuarioCriado = await database.Usuarios.create({
                id: uuid.v4(),
                login: novoUsuario.login,
                email: novoUsuario.email,
                senha: senhaCript
            })
            
            return usuarioCriado
            
        } catch (err) {
           throw new Error('Erro ao cadastrar usuario')
        } 

    }

}

module.exports = UsuarioService
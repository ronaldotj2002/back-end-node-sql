const database = require('../models')
const {hash}  = require('bcryptjs');
const uuid = require('uuid');

class UsuarioService {

    static async listarUsuarios() {
        console.info("Listando Usuários..")
        try {
            const listarUsuarios = await database.Usuarios.findAll();
            return listarUsuarios;
        } catch (err) {
            throw new Error('Erro ao listar Usuários')
        }
    }

    static async filtrarUsuario(id) {
        console.info("Listando um usuário..")
        try {
            const usuario = await database.Usuarios.findOne({ 
                where: { 
                    id: Number(id)
                } 
            });            
            return usuario;
        } catch (err) {
            throw new Error('Erro ao buscar Usuário')
        }
    }
    
    async criarUsuario(dados) { 
        console.log("dados node", dados)
        console.info("Iniciando a criação do Usuário..")
        const novoUsuario = dados

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
                nome: novoUsuario.nome,
                login: novoUsuario.login,
                email: novoUsuario.email,
                role: novoUsuario.role,
                senha: senhaCript
            })
            
            return usuarioCriado
            
        } catch (err) {
            console.log("ERRO: ", err)
           throw new Error('Erro ao cadastrar usuario')
        } 

    }

    async atualizaUsuario(dados, id) {
        
        try {
            await database.Usuarios.update(dados, {
                where: { id: Number(id) }
            })
            const usuarioAtualizado = await database.Usuarios.findOne({ 
                where: { id: Number(id) } 
            });
            return usuarioAtualizado
        } catch (err) {
            throw new Error('Erro ao atualizar o usuario')
        }

    }

    async deletarUsuario(id) {

        try {
            await database.Usuarios.destroy({where: { id: Number(id) }})
            return "usuário Deletado com sucesso!"
        } catch (err) {
            throw new Error('Erro ao deletar usuario')
        }
    }

}

module.exports = UsuarioService
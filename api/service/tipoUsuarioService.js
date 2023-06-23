const database = require('../models')
const uuid = require('uuid')
class TipoUsuarioService {

    async cadastrar(dados) {
        console.info("TIPO USUARIO", dados)
        const tipoUsuario = await database.TipoUsuario.findOne({ 
            where: { 
                nome: dados.nome
            }
        })
        if(tipoUsuario) {
            throw new Error("Tipo usuário já cadastrado")
        }

        try {

            const cadastro = await database.TipoUsuario.create({
                id: uuid.v4(),
                nome: dados.nome,
                descricao: dados.descricao
            })
            return cadastro
        } catch(err) {
            throw new Error("Erro ao cadastrar o tipo de usuário")
        }
    }

}

module.exports = TipoUsuarioService
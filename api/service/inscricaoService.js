const database = require('../models');
const sequelize = require('sequelize');
const uuid = require('uuid');

class InscricaoService {

    static async listarInscricoes() {

        try {
            const inscricoes = await database.Inscricoes.findAll();
            return inscricoes 
        } catch (err) {
            console.log("=====>", err)
            throw new Error('Erro ao listar as inscricoes')
        }
    }

    static async filtrarInscricoes(id) {

        const verificarInscricao = await database.Inscricoes.findOne({
            where: {
                id: Number(id)
            }
        })
        // se o id informado não existir na base
        if(!verificarInscricao) 
            throw new Error('Não existe cadastro para a inscrição pesquisada')

        try {
            const inscricao = await database.Inscricoes.findOne({ 
                where: {
                    id: Number(id)
                }
            });
            return inscricao 
        } catch (err) {
            throw new Error('Erro ao filtrar inscricao')
        }
    }

    static async realizarInscricao(dados, id) {
        
        // Busca Inscritos
        const inscrito = await database.Inscricoes.findOne({ 
            where: {
                usuarioId: Number(id)
            }
        })
        console.log("=====> DADOS", inscrito)
        console.log("=======>id", id)
        console.log("=====> ", dados)
        
        // Busca a quantidade de inscritos no curso
        const curso = await database.Cursos.findOne({ 
           where: {
               id: Number(dados.cursoId)
           }
       })

       console.log("=====> DADOS.usuarioId", inscrito.cursoId, '=', dados.cursoId)
        // Verificando se o usuário já está inscrito no curso        
        if(!inscrito) 
            throw new Error('Curso não encontrado') 

        if(inscrito.cursoId == dados.cursoId) 
            throw new Error('Aluno já Inscrito no curso') 
        
        
        // if(curso.data_inicio <= new Date()) 
        //     throw new Error('Este Curso não está disponível') 
        
        // Caso o usuário não esteja inscrito no curso
        try {
            const inscricao = await database.Inscricoes.create({
                id: uuid.v4(),
                status: dados.status,
                data_inscricao: dados.data_inscricao,
                data_cancelamento: null,
                usuarioId: id,
                cursoId: dados.cursoId
            })
            
            if(inscricao) {             
                           
                // Incrementando após a inscrição
                const qtdAtualizada = {inscritos: curso.inscritos + 1};
                                
                try {
                    // Atualizando a quantidade de inscritos no curso
                    await database.Cursos.update(qtdAtualizada, {
                        where: { id: Number(dados.cursoId) }
                    });
                    
                } catch (err) {
                    throw new Error('Erro ao atualizar a quantidade de inscritos')
                }
            }

            return inscricao

        } catch (err) {
            throw new Error('Erro ao realizar a inscrição')
        }
    }

    static async cancelarInscricao(id) {

        try {
            await database.Inscricoes.destroy({where: { id: Number(id) }})
            return "Inscrição Cancelada com sucesso!"
        } catch (err) {
            throw new Error('Erro ao cancelar Inscrição')
        }
    }

}

module.exports = InscricaoService
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

        try {
         
            const verificarInscricao = await database.Inscricoes.findAll({
                where: {
                    usuarioId: Number(id)
                }
            })
            return verificarInscricao 
        } catch (err) {
            throw new Error('Erro ao carregar inscrição!')
        }

    }

    static async realizarInscricao(dados, id) {
        console.log("id", id)
        console.log("DADOS", dados)
        // Busca Inscritos

        const inscrito = await database.Inscricoes.findAll({
            where: {
                usuarioId: Number(id),
                cursoId: Number(dados.cursoId)
            }
        });

        // console.log("inscrito?.dataValues.usuarioId",inscrito?.dataValues.usuarioId)
        // console.log("id",id)

        inscrito.forEach(insc => {
            if(insc?.dataValues.usuarioId == id)
                throw new Error('Aluno já Inscrito no curso') 
        })


                
        // Busca a quantidade de inscritos no curso
        const curso = await database.Cursos.findOne({ 
           where: {
               id: Number(dados.cursoId)
           }
       })
        
        if(!curso) 
           throw new Error('O curso informado não existe') 
              
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
        console.log('cancelarInscricao service ====>', id)
        // Busca a quantidade de inscritos no curso
        const inscricao = await database.Inscricoes.findOne({ 
            where: {
                id: Number(id)
            }
        })

        const curso = await database.Cursos.findOne({ 
            where: {
                id: Number(inscricao.cursoId)
            }
        })
            

        try {
            
          const cancelado =  await database.Inscricoes.destroy({where: { id: Number(id) }})  
          
            if(cancelado){
                console.log('cancelarInscricao cancelado ====>', cancelado)
                // Decrementando após o cancelamento da inscrição
                const qtdAtualizada = {inscritos: curso.inscritos - 1};
                
                try {
                    // Atualizando a quantidade de inscritos no curso
                    await database.Cursos.update(qtdAtualizada, {
                        where: { id: Number(inscricao.cursoId) }
                        });

                } catch(err) {
                    throw new Error('Erro ao atualizar a quantidade de inscritos')
                }
                }
           
            return "Inscrição Cancelada com sucesso!"

        } catch (err) {
            throw new Error('Erro ao cancelar Inscrição')
        }
    }

}

module.exports = InscricaoService
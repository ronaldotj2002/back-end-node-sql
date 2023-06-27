const database = require('../models')

class CursosService {

    static async listarCursos() {

        try {
            const cursos = await database.Cursos.findAll();
            return cursos 
        } catch (err) {
            throw new Error('Erro ao listar cursos')
        }
    }

    static async filtrarCursos(id) {

        try {
            const curso = await database.Cursos.findOne({ 
                where: {
                    id: Number(id)
                }
            });
            return curso 
        } catch (err) {
            throw new Error('Erro ao filtrar cursos')
        }
    }

    static async cadastrarCursos(dados) {

        console.info("Iniciando o cadastro de cursos..")

        const cursoExistente = await database.Cursos.findOne({ 
            where: { 
                nome: dados.nome
            } 
        }); 

        if(cursoExistente) {
            throw new Error('Este curso já está cadastrado')
        }

        try {
            const curso = await database.Cursos.create({                 
                nome: dados.nome,
                descricao: dados.descricao,
                data_inicio: dados.data_inicio
            });
            return curso 
        } catch (err) {
            throw new Error('Erro ao filtrar cursos')
        }
    }

    static async editarCurso(dados, id) {
        console.info("Iniciando edição do curso", dados, id)
        try {
            await database.Cursos.update(dados, {
                where: { id: Number(id) }
            });
            const cursoAtualizado = await database.Cursos.findOne({
                where: { id: Number(id) }
            })
            return cursoAtualizado
        } catch (err) {
            throw new Error('Erro ao atualizar o curso')
        }
    }

}

module.exports = CursosService
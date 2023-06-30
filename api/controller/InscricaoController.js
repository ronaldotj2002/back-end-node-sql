const InscricaoService = require('../service/inscricaoService');


class InscricaoController {

    static async listar(req, res) {
        console.info("Iniciando a lista de Inscrições..")
        try {
            const inscricoes = await InscricaoService.listarInscricoes()            
            return res.status(200).json(inscricoes)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }

    static async filtrar(req, res) {
        console.info("Iniciando o Filtro de Inscrições..")
        const { id } = req.params;
        try {
            const inscricao = await InscricaoService.filtrarInscricoes(id)
            return res.status(200).json(inscricao)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }

    static async novaInscricao(req, res) {
        console.info("Iniciando Inscrição.. ")
        
        const usuarioId = req.params.id
        const dadosInscricao = req.body
        // console.log("====> realizarInscricao", usuarioId)
        // const body = req.body
        try {
            const inscricao = await InscricaoService.realizarInscricao(dadosInscricao, usuarioId)
            console.log("Inscricao",inscricao)
            return res.status(200).json(inscricao)
        } catch (err) {
            return res.status(500).json(err.message)
        }
        
    }


    static async deletarInscricao(req, res) {
        const { id } = req.params;
        try {
        
            const inscricao = await InscricaoService.cancelarInscricao(id)
            return res.status(200).json(inscricao)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }

}


module.exports = InscricaoController
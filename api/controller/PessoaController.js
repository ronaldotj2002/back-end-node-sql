const database = require('../models');

class PessoaController {

    static async listarPessoasAll(req, res) {
        try {
            const listarPessoas = await database.Pessoas.findAll();
            return res.status(200).json(listarPessoas);

        } catch (err) {
            return res.status(500).json(err.message);
        } finally {

        }

    }
    
    static async listarUmaPessoa(req, res) {

        const { id } = req.params;
        try {
            const filtrarPessoa = await database.Pessoas.findOne({ where: {id: Number(id)} });
            return res.status(200).json(filtrarPessoa);

        } catch (err) {
            return res.status(500).json(err.message);
        } finally {

        }

    }
}

module.exports = PessoaController
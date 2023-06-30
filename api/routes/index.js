const bodyParser = require('body-parser');
const usuario = require('./usuariosRoute');
const auth = require('./authRoute');
const cursos = require('./cursosRoute');
const inscricoes = require('./inscricoesRoute');


module.exports = app => {

    app.use(
        bodyParser.json(),
        auth,
        usuario,
        cursos,
        inscricoes
        )
         
}
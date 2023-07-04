const bodyParser = require('body-parser');
const cors = require('cors')
const usuario = require('./usuariosRoute');
const auth = require('./authRoute');
const cursos = require('./cursosRoute');
const inscricoes = require('./inscricoesRoute');

const corsOptions = {
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
 }
 
 

module.exports = app => {

    app.use(
        bodyParser.json(),        
        cors(corsOptions),
        cursos,
        inscricoes,
        auth,
        usuario,
        )
         
}
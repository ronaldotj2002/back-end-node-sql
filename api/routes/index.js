const bodyParser = require('body-parser');
const usuario = require('./usuariosRoute');
const auth = require('./authRoute');
const tipoUsuario = require('./tipoUsuarioRouter');


module.exports = app => {

    app.use(
        bodyParser.json(),
        auth,
        usuario,
        tipoUsuario
        )
         
}
const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');
const usuario = require('./usuariosRoute');
const auth = require('./authRoute');


module.exports = app => {

    app.use(
        bodyParser.json(),
        pessoas,
        usuario,
        auth
        )
         
}
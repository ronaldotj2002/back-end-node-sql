const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');
const usuario = require('./usuariosRoute');


module.exports = app => {

    app.use(
        bodyParser.json(),
        pessoas,
        usuario
        )
         
}
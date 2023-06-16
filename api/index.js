const express = require('express');
const routers = require('./routes');

const app = express();
const port = 3000;

routers(app);

app.listen(port, () => console.log("Servidor Rodando na porta: ", port));

module.exports = app
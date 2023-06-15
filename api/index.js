const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 7000;

app.get('/teste', (req, res) => res
.status(200)
.send(
    {mensagem: 'Acesso à API!'}
))

app.listen(port, () => console.log("Servidor Rodando na porta: ", port));

module.exports = app;
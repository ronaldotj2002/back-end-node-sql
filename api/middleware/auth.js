const { verify, decode } = require('jsonwebtoken');
const jsonSecret = require('../config/jsonSecret');

module.exports = async (req, res, next) => {
    const token = req.headers.authorization

    if(!token) {
        return res.status(403).send('Token inválido ou não informado');
    }

    const [, accessToken] = token.split(" ");

    try {
        verify(accessToken, jsonSecret.secret)

        const {id, login} = await decode(accessToken);

        req.idLogin = id
        req.login = login

        return next()

    } catch (err) {
        res.status(403).send('Não autorizado')
    }
}
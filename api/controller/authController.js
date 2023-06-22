const AuthService = require('../service/authService')

const authService = new AuthService()

class AuthController {

    static async login(req, res) {

        const {login, senha} = req.body
        
        try {
            const loginUsuario = await authService.login({login, senha})
            res.status(200).send(loginUsuario)

        } catch (err) {
            res.status(401).send({message: err.message})
        }

    }
}


module.exports = AuthController
const { Router } = require ('express')
const AuthController = require ('../controller/authController')

const router = Router()

router
    .post('/auth/login', AuthController.login)
    // .get('/auth/logout', AuthController.logout)


    module.exports = router
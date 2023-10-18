const {body} =require('express-validator');
const {compareSync} =require('bcryptjs');

const {readJSON} =require('../data');
module.exports = [
    body('email')
    .notEmpty().withMessage('El email es requreido').bail()
    .isEmail().withMessage('El Fomrato no es correcto!'),

    body('password')
        .notEmpty().withMessage('La contraseña es requreida!!').bail()
        .custom((value,{req})=>{
            const users = readJSON('users.json')
            const user= users.find(user => user.email === req.body.email)// primero validamos que sea el usuario para despues validar el pass
            if(!user|| !compareSync(value,user.password)){ // verificamos si existe el usuario!
                return false

            }
            return true
        }).withMessage('Credenciales Invalidas!')
]
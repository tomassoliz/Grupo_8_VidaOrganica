const {body} = require('express-validator');
const { readJSON } = require('../src/data');
const {compareSync} = require('bcryptjs')
module.exports =[
    body('email')
    .notEmpty().withMessage('El email es requerido').bail()
    .isEmail().withMessage('El formato no es correcto!').bail(),
    
    body('password')
    .notEmpty().withMessage('La contraseña es requerida!')
    .custom((value, {req})=>{
        const users = readJSON('users.json')
        const user = users.find(user => user.email === req.body.email) //primero validamos que sea el usuario para despues validar el pass
        if(!user || !compareSync(value,user.password)){// verificamos si existe el usuario!
            return false
        }
        
        return true
    }).withMessage('Credenciales invalidas!')

]
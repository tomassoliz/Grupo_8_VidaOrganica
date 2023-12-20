const { body } = require('express-validator');
const { compareSync } = require('bcryptjs');
const db = require('../database/models')

module.exports = [
    body('email')
        .notEmpty().withMessage('El email es requerido').bail()
        .isEmail().withMessage('El formato no es correcto!'),
        body('password')
        .notEmpty().withMessage('La contraseña es requerida!!')
        .custom((value, {req}) => {

            return db.User.findOne({ //porque no tengo el id pero tengo el email
                where : {
                    email : req.body.email
                }
            })
                .then(user => {
                    if(!user || !compareSync(value,user.password)){
                        return Promise.reject() //rechaza la promesa pero en express generator como un false
                    }
                })
                .catch(() => Promise.reject('Credenciales inválidas'))
  
        })
]

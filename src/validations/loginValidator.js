const { body } = require('express-validator');
const { compareSync } = require('bcryptjs');
const db = require('../database/models')

module.exports = [
    body('email')
        .notEmpty().withMessage('El email es requreido').bail()
        .isEmail().withMessage('El Fomrato no es correcto!'),

    body('password')
        .notEmpty().withMessage('La contraseña es requreida!!').bail()
        .custom((value, { req }) => {

            return db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then(user => {
                    if (!user || !compareSync(value, user.password)) {
                        return Promise.reject()
                    }
                })
                .catch(error => console.log(error))

        }).withMessage('Credenciales Invalidas!')
]
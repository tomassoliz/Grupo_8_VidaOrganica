const { body } = require('express-validator');
const { compareSync } = require('bcryptjs');
const db = require('../database/models')

module.exports = [
    body('email')
        .notEmpty().withMessage('El email es requerido').bail()
        .isEmail().withMessage('El formato no es correcto!'),
    body('password')
        .notEmpty().withMessage('La contraseña es requerida!!').bail()
        .custom(async (value, { req }) => {
            try {
                const user = await db.User.findOne({
                    where: {
                        email: req.body.email
                    }
                });

                if (!user || !compareSync(value, user.password)) {
                    return Promise.reject('Credenciales inválidas!');
                }

                return true;
            } catch (error) {
                console.error(error);
            }
        })
]

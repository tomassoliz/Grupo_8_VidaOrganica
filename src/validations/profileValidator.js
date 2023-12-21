const moment = require('moment');
const { check, body } = require("express-validator");

module.exports = [
    check("name")
        .isLength({
            min: 2,
        })
        .withMessage("Debe tener como mínimo dos letras")
        .bail()
        .isAlpha('es-ES', { ignore: ' ' })
        .withMessage("Solo se permiten caracteres alfabéticos"),

    check("surname")
        .isLength({
            min: 2,
        })
        .withMessage("Debe tener como mínimo dos letras")
        .bail()
        .isAlpha('es-ES', { ignore: ' ' })
        .withMessage("Solo se permiten caracteres alfabéticos"),

    body('birthday')
        .custom((value) => {
            const birthday = moment(value);
            const minDate = moment().subtract(120, 'years');

            if (birthday.isBefore(minDate)) {
                throw new Error("No puede pasar los 120 años")
            }
            return true
        })
        .custom((value) => {
            const birthday = moment(value);
            const currentDate = moment();

            if (birthday.isAfter(currentDate)) {
                throw new Error("Fecha inválida. Eligí una anterior")
            }
            return true
        })
];
const {check, body} = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre del producto es obligatorio').bail()
        .isLength({
            min: 5,
            max: 40
        }).withMessage('Debe tener entre 5 y 40 caracteres'),
    check('price')
        .notEmpty().withMessage('Debes indicar el precio').bail()
        .isDecimal().withMessage('El precio debe ser un número de almenos 2 digitos'),
    check('description')
        .notEmpty().withMessage('La descripción es requerida').bail()
        .isLength({
            min : 20,
            max : 800
        }).withMessage('La descripción debe tener entre 20 y 500 caracteres'),
    body('images')
        .custom((value, {req}) => {
           if(req.files.image){
                return true
           }
           return false
        }).withMessage('No has subido ninguna imagen')
]
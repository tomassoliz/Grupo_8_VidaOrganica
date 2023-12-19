const {check, body} = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre del producto es obligatorio').bail()
        .isLength({
            min: 4,
            max: 40
        }).withMessage('Debe tener entre 4 y 40 caracteres'),
    check('price')
        .notEmpty().withMessage('Debes indicar el precio').bail()
        .isDecimal().withMessage('El precio debe ser un número de al menos 2 digitos'),
        check('brand')
        .notEmpty().withMessage('La marca es requerida'),
        check('category')
        .notEmpty().withMessage('No has escogido la categoría'),
    check('description')
        .notEmpty().withMessage('La descripción es requerida').bail()
        .isLength({
            min : 20,
            max : 500
        }).withMessage('La descripción debe tener entre 20 y 500 caracteres'),
    body('image')
        .custom((value, {req}) => {
           if(req.files.image){
                return true
           }
           return false
        }).withMessage('No has subido ninguna imagen')
]
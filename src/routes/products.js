const express = require('express')
const router = express.Router()
const { products, carrito, add, edit,remove, productsDetails, } = require('../controllers/productsController')

/* /products */

router.get('/productsDetails', productsDetails)
router.get('/carrito', carrito)
router.get('/productsAdd', add)
router.get('/productsEdit', edit)
router.delete('/remove/:id', remove)


module.exports = router;
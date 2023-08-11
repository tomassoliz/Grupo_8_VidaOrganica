const express = require('express')
const router = express.Router()
const { products, carrito, add, edit } = require('../controllers/productsController')

/* /products */

router.get('/productsDetails', products)
router.get('/carrito', carrito)
router.get('/productsAdd', add)
router.get('/productEdit', edit)

module.exports = router;
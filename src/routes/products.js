const express = require('express')
const router = express.Router()
const { products, carrito, add } = require('../controllers/productsController')

/* /products */

router.get('/productsDetails', products)
router.get('/carrito', carrito)
router.get('/productsAdd', add)

module.exports = router;
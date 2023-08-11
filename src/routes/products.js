const express = require('express')
const router = express.Router()
const {products,carrito,edit} = require('../controllers/productsController')

/* /products */

router.get('/productsDetails',products)
router.get('/carrito', carrito)
router.get('/edit', edit)

module.exports = router;
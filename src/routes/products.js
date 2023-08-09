const express = require('express')
const router = express.Router
const {products,carrito} = require('../controllers/productsController')

router.get('/productsDetails',products)
router.get('/carrito', carrito)

module.exports = router;
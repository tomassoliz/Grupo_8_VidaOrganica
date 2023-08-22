const express = require('express')
const router = express.Router()
const {products,carrito,deleteProduct} = require('../controllers/productsController')

router.get('/productsDetails',products)
router.get('/carrito', carrito)
router.delete('/delete/:id', deleteProduct)


module.exports = router;
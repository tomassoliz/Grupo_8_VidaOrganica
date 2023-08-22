const express = require('express')
const router = express.Router()
const { products, carrito, add, edit,deleteProduct } = require('../controllers/productsController')

/* /products */

router.get('/productsDetails', products)
router.get('/carrito', carrito)
router.get('/productsAdd', add)
router.get('/productsEdit', edit)
router.delete('/delete/:id', deleteProduct)


module.exports = router;
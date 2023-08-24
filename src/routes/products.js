const express = require('express')
const router = express.Router()
const { productsDetails, carrito, add, edit } = require('../controllers/productsController')

/* /products */

router.get('/productsDetails', productsDetails)
router.get('/carrito', carrito)
router.get('/productsAdd', add)
router.get('/productsEdit', edit)

module.exports = router;
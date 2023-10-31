const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const { detail, add, edit, create, update, remove , cart} = require('../controllers/productsController');
const { destroy } = require('../controllers/products/remove');


/* /products */

router
    .get('/detail/:id', detail)
    .get('/add', add)
    .post('/add', upload.single('image'), create)
    .get('/edit/:id', edit)
    .get('/carrito', cart)
    .put('/update/:id', upload.single('image'), update)
    .delete('/remove/:id', destroy)

module.exports = router;
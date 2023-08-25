const express = require('express')
const router = express.Router()
const { detail, add, edit, create, update, remove } = require('../controllers/productsController');


/* /products */

router
    .get('/detail/:id', detail)
    .get('/add', add)
    .post('/add', create)
    .get('/edit/:id', edit)
    .put('/update/:id', update)
    .delete('/remove/:id', remove)

module.exports = router;
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const { detail, add, edit, create, update, remove , cart} = require('../controllers/productsController');
const { destroy } = require('../controllers/products/remove');
const productValidator = require('../validations/productValidator');
const editValidator = require('../validations/editValidator');


/* /products */

router
    .get('/detail/:id', detail)
    .get('/add', add)
    .post('/add', upload.fields([
      {
        name: "image",
      },
      {
        name: "images",
      },
    ]), productValidator, create)
    .get('/edit/:id', edit)
    .get('/carrito', cart)
    .put('/update/:id', upload.fields([
      {
        name: "image",
      },
      {
        name: "images",
      },
    ]), editValidator, update)
    .delete('/remove/:id', destroy)

module.exports = router;
const express = require('express');
const router = express.Router();

const { categoriesCreate, categoriesAdd, categoriesEdit, categoriesUpdate, categoriesRemove } = require('../controllers/categoriesController');

/* /categories */

router
    .get('/categoriesAdd', categoriesAdd)
    .post('/categoriesAdd', categoriesCreate)
    .get('/edit/:id', categoriesEdit)
    .put('/update/:id', categoriesUpdate)
    .delete('/categoriesRemove/:id', categoriesRemove)

module.exports = router;
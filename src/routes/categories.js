const express = require('express');
const router = express.Router();

const { categoriesCreate, categoriesAdd, categoriesEdit, categoriesUpdate, categoriesRemove } = require('../controllers/categoriesController');

/* /categories */

router
    .get('/categoriesAdd', categoriesAdd)
    .post('/categoriesAdd', categoriesCreate)
    .put('/categories/edit/:id', categoriesEdit)
    .delete('/categoriesRemove/:id', categoriesRemove)
    .put('/update/:id', categoriesUpdate)

module.exports = router;
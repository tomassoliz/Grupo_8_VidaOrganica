const express = require('express');
const router = express.Router();

const { categoriesCreate, categoriesAdd, categoriesEdit, categoriesUpdate, categoriesRemove } = require('../controllers/categoriesController');
//const categoriesController = require('../controllers/categoriesController')

/* /categories */

router
    .get('/categoriesAdd', categoriesAdd)
    .post('/categoriesAdd', categoriesCreate)
    .get('/edit/:id', categoriesEdit)
    .put('/update/:id', categoriesUpdate)
    .delete('/categoriesRemove/:id', categoriesRemove)
    
   /* .get('/index', categoriesController.listar)
    .get('/show/:categoryId', categoriesController.show)
    .post('/create', categoriesController.create)
    .get('/edit/:categoryId/edit', categoriesController.edit)
    .post('/update/:categoryId/edit', categoriesController.update)
    .delete('/delete/:categoryId/delete', categoriesController.delete)
    .post('/delete/:categoryId/delete', categoriesController.confirmDelete)*/





module.exports = router;
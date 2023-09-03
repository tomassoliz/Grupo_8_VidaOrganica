const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const { detail, add, edit, create, update, remove } = require('../controllers/productsController');


/* /products */

router
    .get('/detail/:id', detail)
    .get('/add', add)
    .post('/add', upload.single('image'), create)
    .get('/edit/:id', edit)
    .put('/update/:id', upload.single('image'), update)
    .delete('/remove/:id', remove)

module.exports = router;
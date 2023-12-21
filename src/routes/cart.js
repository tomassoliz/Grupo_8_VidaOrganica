const express = require('express');
const { showAll, addItem, removeItem, emptyCart, removeAllItem, finallyCart, } = require('../controllers/apiCartController');
const router = express.Router();

/* /cart */
router
    .get('/', showAll)
    .post('/', addItem)
    .delete('/', removeItem)
    .delete('/item-all',removeAllItem)
    .delete('/all',emptyCart)
    .delete('/finally',finallyCart)

module.exports = router;
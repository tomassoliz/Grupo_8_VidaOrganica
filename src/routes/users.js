const express = require('express');
const router = express.Router();

const { register, login, carrito } = require('../controllers/usersController')

/* /users */

router.get('/register', register);
router.get('/login', login);
router.get('/carrito', carrito)


module.exports = router;

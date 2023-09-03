const express = require('express');
const router = express.Router();

const { register, login, carrito, profile } = require('../controllers/usersController')

/* /users */

router
    .get('/register', register)
    .get('/login', login)
    .get('/carrito', carrito)
    .get('/profile', profile)
    .put('/profile', updateProfile)

    module.exports = router;

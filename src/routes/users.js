const express = require('express');
const router = express.Router();

const { register, login, carrito, profile, processLogin,logout } = require('../controllers/usersController');
const loginValidator = require('../../validations/loginValidator');
const checkUserLogin = require("../middlewares/checkUserLogin");
const checkNotUserLogin = require('../middlewares/checkNotUserLogin')


/* /users */

router
    .get('/register', register)
    .get('/login',checkNotUserLogin, login)
    .post('/login',loginValidator,processLogin)
    .get('/carrito', carrito)
    .get('/profile',checkUserLogin, profile)
    .get('/logout',logout)
    /* .put('/profile', updateProfile) */

    module.exports = router;

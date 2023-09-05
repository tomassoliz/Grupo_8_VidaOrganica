const express = require('express');
const router = express.Router();

const { register, login, carrito, profile, updateProfile } = require('../controllers/usersController');
const uploadUser = require('../middlewares/uploadUser');

/* /users */

router
    .get('/register', register)
    .get('/login', login)
    .get('/carrito', carrito)
    .get('/profile', profile)
    .put('/update-profile',uploadUser.single('imagen'), updateProfile) 

    module.exports = router;

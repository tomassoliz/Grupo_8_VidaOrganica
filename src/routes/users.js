const express = require('express');
const router = express.Router();

const { register, processRegister, login, profile, processLogin, logout, updateProfile, editProfile, adminMenu} = require('../controllers/usersController');
const checkUserLogin = require("../middlewares/checkUserLogin");
const checkNotUserLogin = require('../middlewares/checkNotUserLogin');
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');
const checkAdmin = require('../middlewares/checkAdmin');
const uploadUser = require('../middlewares/uploadUser')

/* /users */

router
    .get('/register', checkNotUserLogin, register)
    .post('/register', registerValidator, processRegister)
    .get('/login', checkNotUserLogin, login)
    .post('/login', loginValidator, processLogin)
    .get('/profile', checkUserLogin, profile)
    .get('/editProfile/:id', editProfile)
    .put('/updateProfile/:id', uploadUser.single('image'), updateProfile)
    .get('/logout', logout)
    .get('/admin', loginValidator, checkAdmin, processLogin, adminMenu )
    
module.exports = router;

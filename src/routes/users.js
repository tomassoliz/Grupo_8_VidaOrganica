const express = require('express');
const router = express.Router();
const { register, login, userAdmin } = require('../controllers/usersController')

/* /users */

router.get('/userAdmin', userAdmin);
router.get('/register', register);
router.get('/login', login);


module.exports = router;

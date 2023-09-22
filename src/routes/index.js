const express = require('express');
const router = express.Router();
const { index, admin, search } = require('../controllers/indexController');
const checkAdmin = require('../middlewares/checkAdmin');

/* / */

router
    .get('/', index)
    .get('/admin',checkAdmin, admin )
    .get('/search', search); 
    

module.exports = router;

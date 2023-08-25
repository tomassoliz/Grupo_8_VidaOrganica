const express = require('express');
const router = express.Router();
const { index, admin } = require('../controllers/indexController');

/* / */
/* ROUTER */

router
    .get('/', index)
    .get('/admin', admin )
    
  

module.exports = router;

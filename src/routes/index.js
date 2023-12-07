const express = require('express');
const router = express.Router();
const { index, admin, search,changeUserRole } = require('../controllers/indexController');
const checkAdmin = require('../middlewares/checkAdmin');

/* / */

router
    .get('/', index)
    .get('/admin',checkAdmin,admin)
    .get('/search', search)
    .post('/admin/change-role/:userId', checkAdmin, changeUserRole)

module.exports = router;

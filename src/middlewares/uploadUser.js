const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        return callback(null, './public/images/avatar')
    },
    filename: (req, file, callback) => {
        return callback(null,`${Date.now()}_avatar_${path.extname(file.originalname)}`)
    }
});

const uploadUser = multer({
    storage
});

module.exports = uploadUser;
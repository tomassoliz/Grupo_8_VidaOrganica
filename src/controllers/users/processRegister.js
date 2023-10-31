const { validationResult } = require('express-validator')
const db = require('../../database/models');
const { hashSync } = require('bcryptjs');

module.exports = async (req, res) => {

    try {
        let errors = validationResult(req);
    
        if (errors.isEmpty()) {
            const { name, surname, email, password } = req.body
            
           await db.User.create({
                name: name.trim(),
                surname: surname.trim(),
                email: email.trim(),
                password: hashSync(password, 10),
                roleId: 2
            })
            return res.redirect('/users/login')

        } else {
            return res.render('register', {
                old: req.body,
                errors: errors.mapped()
            })
        }
        
    } catch (error) {
        console.log(error);
    }
}

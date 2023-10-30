const db = require('../../database/models')
const { validationResult } = require('express-validator');

module.exports = (req, res) => {

    const errors = validationResult(req); // examina lo que viene del request!

    if (errors.isEmpty()) {

        const { email, remember } = req.body

       db.User.findOne({
            where: {
                email
            },

            include: [
                { 
                    model: db.Role 
                }
            ]
        })
            .then(user => {
                req.session.userLogin = {
                    id: user.id,
                    name: user.name,
                    rol: user.Role.name
                }
                
                remember !== undefined && res.cookie('vidaOrganicaTheBest', req.session.userLogin, {
                    maxAge: 1000 * 60
                })
                return res.redirect('/')
            })
            .catch(error => console.log(error))

    } else {
        return res.render('login', {
            errors: errors.mapped(),
            old: req.body
        })
    }

}
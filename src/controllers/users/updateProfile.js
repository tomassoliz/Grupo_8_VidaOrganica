const db = require('../../database/models')
const { validationResult } = require('express-validator')

module.exports = async (req, res) => {
    const errors = validationResult(req)

    if (errors.isEmpty()) {
        const { name, surname, email, birthday, address, call, about } = req.body

        const user = await db.User.findByPk(req.session.userLogin.id)
        
        db.User.update(
            {
                name: name.trim(),
                surname: surname.trim(),
                email: email.trim(),
                birthday,
                address,
                call,
                about: about.trim(),
                avatar: req.file?.filename || user.avatar //si existe accede --> con el signo ?
            },
            {
                where: {
                    id: req.session.userLogin.id
                }
            })
            .then(() => {
                return res.redirect('/')
            })
            .catch(error => console.log(error))
    } else {
        db.User.findByPk(req.session.userLogin.id)
            .then(user => {
                return res.render('profile', {
                    ...user.dataValues,
                    errors: errors.mapped()
                })
            })
            .catch(error => console.log(error))
    }
}

// no me edita nada
const db = require('../../database/models')
const { validationResult } = require('express-validator')

module.exports = async (req, res) => {

    try {
        const errors = validationResult(req)

        if (errors.isEmpty()) {

            const { name, surname, email, birthday, address, call, about, province, city } = req.body
            // creo una constante con la data del usuario

            const data = {
                name: name.trim(),
                surname: surname.trim(),
                email: email.trim(),
                birthday: birthday || null,
                address,
                call: call || null,
                about
                // avatar: req.file?.filename || user.avatar ------> si existe accede = con el signo ?
            }
            // si trae el archivo poneme el nombre
            if (req.file) {
                data.avatar = req.file.filename
            }
            await db.User.update(data,
                {
                    where: {
                        id: req.session.userLogin.id
                    }
                })

            await db.Address.update({
                city,
                province,
                address
            },
                {
                    where: {
                        userId: req.session.userLogin.id
                    }
                })

            return res.redirect('/users/profile')
        } else {
            // si no dejala como esta
            db.User.findByPk(req.session.userLogin.id)

            return res.render('profile', {
                ...user.dataValues,
                errors: errors.mapped()
            })
        }
    } catch (error) {
        console.log(error);
    }
}

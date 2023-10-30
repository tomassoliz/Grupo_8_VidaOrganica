const db = require('../../database/models')

const moment = require('moment')

module.exports = async (req, res) => {

    try {
        const user = await db.User.findByPk(req.session.userLogin.id, {
            include: [
                {
                    model: db.Address
                },
                {
                    model: db.Role
                }
            ]
        }) //TRAES EL USUARIO QUE TIENE EL MISMO ID         

        // return res.send(user)
        return res.render('profile', {
            ...user.dataValues,
            moment
        })
    } catch (error) {
        console.log(error);
    }
}

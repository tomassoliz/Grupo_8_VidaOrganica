const db = require('../../database/models')
const moment = require('moment')

module.exports = async (req, res) => {

    try {
        //TRAES EL USUARIO QUE TIENE EL MISMO ID
        const user = await db.User.findByPk(req.session.userLogin.id, {
            include: [
                {
                    model: db.Role
                }
                // saque el modelo de Address
            ]
        })          
        return res.render('profile', {
            ...user.dataValues,
            moment
        })
    } catch (error) {
        console.log(error);
    }
}

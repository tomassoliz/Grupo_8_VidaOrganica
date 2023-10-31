const { readJSON } = require("../../data");

module.exports = async (req, res) => {
    try {
        const user = await db.User.findAll()
        return res.render('profile', {
            user
        })

    } catch (error) {
        console.log(error);
    }
}
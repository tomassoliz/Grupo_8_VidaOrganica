const { readJSON, writeJSON } = require("../../data")
const User = require('../../data/User')

module.exports = (req, res) => {
    const users = readJSON('users.json');
    const user = users.find(user => user.id === req.session.userLogin.id)
    // let newUser = new User(req.body)
    // users.push(newUser)

    // writeJSON(users, 'users.json');
    return res.render('profile', {
        ...user
    })

}
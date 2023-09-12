const { readJSON } = require("../../data");

module.exports = (req, res) => {
    const users = readJSON('users.json');

    const id = req.params.id;
    const user = users.find(user => user.id === id);

    return res.render('profile', {
        ...user
    })
}
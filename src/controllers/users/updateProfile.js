const { readJSON, writeJSON } = require('../../data');
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const users = readJSON('users.json');
    const id = req.params.id;
    const {name, surname, birthday, homeAdress} = req.body;

    const userEdited = users.map(user => {
        if (user.id === +req.params.id) {
            user.name = name.trim()
            user.surname = surname
            user.birthday = birthday.trim()
            user.homeAdress = homeAdress.trim()
        }
        return user
    })
    writeJSON(userEdited, 'users.json')
}
    
/* if ( req.session.userLogin = users.find(user => user.id === req.session.userLogin.id)) {
    writeJSON(userEdited, 'users.json')
}
return res.render('profile', {
    ...user
}) */
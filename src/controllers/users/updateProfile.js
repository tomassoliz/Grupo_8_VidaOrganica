const { readJSON, writeJSON } = require('../../data');
const { unlinkSync, existsSync } = require('fs');

module.exports = (req, res) => {
    const users = readJSON('users.json');
    const { name, surname, email, birthday, address, call, about } = req.body

    console.log("update");
    const profileEdit = users.map(user => {
        if (user.email === email) {

            req.file &&
                existsSync(`./public/images/avatar/${user.image}`) && 
                unlinkSync(`./public/images/avatar/${user.image}`)

            user.name = name.trim();
            user.surname = surname;
            user.birthday = birthday.trim();
            user.address = address;
            user.call = call;
            user.about = about;
            user.image = req.file ? req.file.filename : user.image;
        }
        return user;
    })

    writeJSON(profileEdit, 'users.json')

    return res.redirect('/users/profile');
}
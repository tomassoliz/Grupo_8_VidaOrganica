// module.exports = (req, res) => {
//     return res.send(req.body)
// }

const { readJSON, writeJSON } = require('../../data');
const User = require('../../data/User')

module.exports = (req, res) => {
    const users = readJSON('users.json')

    const data = {
        ...req.body,
        image : req.file ? req.file.filename : null
    }
    let newUsers = new User(data);

    users.push(newUsers);

    writeJSON(users, 'users.json');

    return res.redirect('/profile')
}

// const { unlinkSync, existsSync } = require("fs");
// const { readJSON, writeJSON } = require("../../data");

// module.exports = (req, res) => {
//     const users = readJSON("users.json");
//     const id = req.params.id;
//     const { name, surname, email, about, adress, birthday, call } = req.body;

//     const userModify = users.map((user) => {
//         if (user.id === id) {

//             req.file &&
//                 existsSync(`./public/images/users${user.image}`) &&
//                 unlinkSync(`./public/images/users${user.image}`);

//             user.name = name.trim();
//             user.surname = surname.trim();
//             user.email = email;
//             user.about = about.trim();
//             user.adress = adress
//             user.birthday = birthday
//             user.call = call
//             user.image = req.file ? req.file.filename : user.image;

//         }
//         return user;
//     });

//     writeJSON(userModify, "users.json");

//     return res.redirect('/profile');
// };

const {hashSync} = require('bcryptjs');
const {v4 : uuidv4} = require('uuid');

const User = function ({name, surname, email, password}) {
    this.id = uuidv4();
    this.name = name.trim();
    this.surname = surname.trim();
    this.email = email.trim();
    this.password = hashSync(password.trim(),10);
    this.rol = "user";
}

module.exports = User
const { hashSync } = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

const User = function ({ name, surname, email, password, rol, birthday, address, call, about, image }) {

    console.log(name, surname, email);

    this.id = uuidv4();
    this.name = name.trim();
    this.surname = surname.trim();
    this.email = email.trim();
    this.password = hashSync(password.trim(), 10);
    this.rol = "user";
    this.birthday = birthday ? birthday : ""
    this.address = address ? address : ""
    this.call = call ? call : ""
    this.about = about ? about : ""
    this.image = "img-default.jpg"
}

module.exports = User
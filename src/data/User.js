const { hashSync } = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

const User = function ({ name, surname, email, password, rol, birthday, adress, call, about, image }) {
    this.id = uuidv4();
    this.name = name.trim();
    this.surname = surname.trim();
    this.email = email.trim();
    this.password = hashSync(password.trim(), 10);
    this.rol = "user";
    this.birthday = birthday;
    this.addres = adress;
    this.call = call;
    this.about = about;
    this.image = image;
}

module.exports = User
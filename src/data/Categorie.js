const { v4: uuidv4 } = require('uuid');

const Categorie = function ({ name, subcategory}) {

    this.id = uuidv4();
    this.name = name.trim();
    this.subcategory = subcategory ? subcategory : "";
}

module.exports = Categorie
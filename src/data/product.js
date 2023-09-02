const { v4: uuidv4 } = require('uuid');

const Product = function ({name,brand,price,discount,description, image}) {
    this.id = uuidv4();
    this.name = name.trim();
    this.brand = brand;
    this.price = +price;
    this.category = category
    this.discount = +discount;
    this.description = description.trim()
    this.createdAT = new Date();
    this.image = image
};

module.exports = Product;
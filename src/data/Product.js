const {v4 : uuidv4} = require('uuid');

const Product = function ({name,brand,price,discount,description, category, image}) {
    this.id = uuidv4();
    this.name = name.trim();
    this.brand = brand;
    this.price = +price;
    this.discount = +discount;
    this.description = description.trim();
    this.category = category;
    this.createdAT = new Date();
    this.image = image
};

module.exports = Product;
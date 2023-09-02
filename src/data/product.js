const { v4: uuidv4 } = require('uuid');

const Product = function ({ name, brand, price, discount, description, category }) {
    this.id = uuidv4();
    this.name = name.trim();
    this.brand = brand;
    this.price = +price;
    this.category = category
    this.discount = +discount;
    this.description = description.trim()
    this.image = 'default-img.png'
    this.createdAT = new Date();
};

module.exports = Product;
const {v4 : uuidv4} = require('uuid');

const Product = function({name,brand,price,discount,description,image, category}){
    
    this.id = uuidv4();
    this.name = name
    this.brand = brand;
    this.price = +price;
    this.category = category
    this.discount = +discount;
    this.description = description
    this.image = image;
}

module.exports = Product;
const {readJSON,writeJSON} = require('../../data');
 
module.exports = (req,res) => {
    const products = readJSON('products.json');
    const id = req.params.id;
    const {name, brand, description, price, discount} = req.body

    const productsEdited = products.map(product => {
        if(product.id === id){
            product.name = name.trim();
            product.brand = brand;
            product.description = description.trim();
            product.price = +price;
            product.discount = +discount;
            product.createdAt = new Date();
            product.image = req.file ? req.file.filename : product.image;
            
        }
        return product
    })

    writeJSON(productsEdited, 'products.json')
    return res.redirect('/admin');
}
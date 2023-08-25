const { readJSON } = require("../data");

module.exports = {
    index: (req, res) => {
        const products = readJSON('products.json');
        const carousell = readJSON('carousell.json');
        
        return res.render('index', {
            products,
            carousell,
        })
    },

    admin: (req, res) => {
        const products = readJSON('products.json');
        const carousell = readJSON('carousell.json');
          
        return res.render('admin', {
            products,
            carousell,
        })
    }

}
const { readJSON } = require("../data");

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));

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
        const adminUser = readJSON('users.json')

        return res.render('admin', {
            products,
            carousell,
            adminUser
        })
    },
    search: (req, res) => {
        const products = readJSON('products.json');

        const keywords = req.query.keywords
        console.log(keywords);
        const results = products.filter(product => product.name.toLowerCase().includes(keywords.toLowerCase()))

        return res.render('results', {
            products,
            keywords,
            results
        })
    }

}
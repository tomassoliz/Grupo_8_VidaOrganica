const { readJSON } = require("../data");

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));

const db = require('../database/models');

module.exports = {
    index: async (req, res) => {

        try {
            const carousell = readJSON('carousell.json'); 
            const products = await db.Image.findAll({
                include : [
                    { 
                        model: db.Product
                    }
                ]    
            })
            
            return res.render('index',{
                products,
                carousell
            })
        } catch (error) {
            console.log(error);
        }
    },

    admin: async (req, res) => {

        try {
            const carousell = readJSON('carousell.json');

            const images = await db.Image.findAll()
            const products = await db.Product.findAll({
                // include: ['brand', 'section', 'category']

                include: [
                    {
                        model: db.Brand, 
                        // attributes : ['id', 'name'] para pasar solamente lo que necesite el front
                    },
                    {
                        model: db.Section
                    },
                    {
                        model: db.Category
                    },
                    {
                        model: db.Image
                    }
                ]
            });
            const brands = await db.Brand.findAll({
                order: ['name']
            })
            const categories = await db.Category.findAll({
                order: ['name']
            })
            const sections = await db.Section.findAll({
                order: ['name']
            })
            const adminUser = await db.User.findAll()
            // Promise.all([carousell, products, brands, categories, sections, adminUser])
            //     .then(([carousell, products, brands, categories, sections, adminUser]) => {
                    
                    return res.render('admin', {
                        carousell,
                        products,
                        brands,
                        sections,
                        categories,
                        adminUser,
                        images
                    })
                // })

        } catch (err) {
            console.log("Error Product create route: ", err);
        }

    },
    search: (req, res) => {
        const products = readJSON('products.json');

        const keywords = req.query.keywords
        const results = products.filter(product => product.name.toLowerCase().includes(keywords.toLowerCase()))

        return res.render('results', {
            products,
            keywords,
            results
        })
    }

}
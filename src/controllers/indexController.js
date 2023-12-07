// index.js

const { readJSON } = require("../data");

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));

const db = require('../database/models');
const { Op } = require('sequelize');

module.exports = {
    index: async (req, res) => {
        try {
            const carousell = readJSON('carousell.json');
            const products = await db.Image.findAll({
                include: [
                    {
                        model: db.Product
                    }
                ]
            });

            return res.render('index', {
                products,
                carousell
            });
        } catch (error) {
            console.log(error);
        }
    },

    admin: async (req, res) => {
        try {
            const carousell = readJSON('carousell.json');
            const products = await db.Image.findAll({
                include: [
                    {
                        model: db.Product,
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
                            }
                        ]
                    }
                ]
            });
            const brands = await db.Brand.findAll({
                order: ['name']
            });
            const categories = await db.Category.findAll({
                order: ['name']
            });
            const sections = await db.Section.findAll({
                order: ['name']
            });
            const adminUser = await db.User.findAll();
            return res.render('admin', {
                carousell,
                products,
                brands,
                sections,
                categories,
                adminUser
            });
        } catch (err) {
            console.log("Error Product create route: ", err);
        }
    },

    //  función para cambiar el rol del usuario
    changeUserRole: async (req, res) => {
        const { userId } = req.params;
        const { newRole } = req.body;

        try {
            const user = await db.User.findByPk(userId);
            if (!user) {
                return res.status(404).send('Usuario no encontrado');
            }

            user.role = newRole;
            await user.save();

            res.redirect('/admin'); // Redirecciona a la página de administrador
        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor');
        }
    },

    search: async (req, res) => {
        try {
            const keywords = req.query.keywords;
            const products = await db.Image.findAll({
                include: [
                    {
                        model: db.Product,
                        where: {
                            [Op.or]: [
                                {
                                    name: {
                                        [Op.substring]: keywords
                                    }
                                },
                                {
                                    description: {
                                        [Op.substring]: keywords
                                    }
                                }
                            ]
                        }
                    }
                ]
            });

            return res.render('results', {
                products,
                keywords
            });
        } catch (error) {
            console.log(error);
        }
    }
};

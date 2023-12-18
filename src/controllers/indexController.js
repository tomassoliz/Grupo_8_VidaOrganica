// index.js

const { readJSON } = require("../data");
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
            const products = await db.Product.findAll({
                include: [
                    "brand",
                    "section",
                    "category",
                    "images"
                ]
            });
            const brands = await db.Brand.findAll({
                order: ['name']
            });
            const categories = await db.Category.findAll({
                order: ['name'],
                include: ['products']
            });
            const sections = await db.Section.findAll({
                order: ['name']
            });
            const adminUser = await db.User.findAll({
                include : [
                    {
                        model: db.Role
                    }
                ]
            });
            
            return res.render('admin', {
                carousell,
                products,
                brands,
                sections,
                categories,
                adminUser,
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
                console.log('Usuario no encontrado');
                return res.status(404).send('Usuario no encontrado');
            }
    
            console.log('Usuario antes del cambio de rol:', user.toJSON());
    
            // Obtener el id del nuevo rol
            const role = await db.Role.findOne({ where: { name: newRole } });
            if (!role) {
                console.log('Rol no encontrado');
                return res.status(404).send('Rol no encontrado');
            }
    
            console.log('Rol encontrado:', role.toJSON());
    
            user.RoleId = role.id;
            await user.save();
    
            console.log('Usuario después del cambio de rol:', user.toJSON());
    
            return res.redirect('/admin')
            
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

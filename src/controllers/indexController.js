const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const { readJSON } = require("../data");
const db = require('../database/models');
const { Op } = require('sequelize');

module.exports = {
    index: (req, res) => {
        
            const carousell = readJSON('carousell.json');
            const sections = db.Section.findAll({      
                include : [
                    {

                        association : 'products',
                        include : [
                            {
                                all : true
                            }
                        ]
                    }
                ]
            })
            Promise.all([ sections])
                .then(([ sections]) => {
                    return res.render('index',{
                        carousell,
                        sections,
                        toThousand
                    })
                })
                .catch(error => console.log(error))
            
    },

    admin : (req,res) => {
        const products = db.Product.findAll({
            include : ['brand','category','section','images']
        });
        const brands = db.Brand.findAll({
            order : ['name'],
            include : {
                association : 'products',
                attributes : ['id']
            }
        })
        const categories = db.Category.findAll({
            order : ['name'],
            include : {
                association : 'products',
                attributes : ['id']
            }
        })

        Promise.all([products, brands, categories])
            .then(([products, brands, categories]) => {
                return res.render('admin', {
                    products,
                    brands,
                    categories
                })
            })
            .catch(error => console.log(error))
      
    },

    //  función para cambiar el rol del usuario
    // changeUserRole: async (req, res) => {
    //     const { userId } = req.params;
    //     const { newRole } = req.body;
    
    //     try {
    //         const user = await db.User.findByPk(userId);
    //         if (!user) {
    //             console.log('Usuario no encontrado');
    //             return res.status(404).send('Usuario no encontrado');
    //         }
    
    //         console.log('Usuario antes del cambio de rol:', user.toJSON());
    
    //         // Obtener el id del nuevo rol
    //         const role = await db.Role.findOne({ where: { name: newRole } });
    //         if (!role) {
    //             console.log('Rol no encontrado');
    //             return res.status(404).send('Rol no encontrado');
    //         }
    
    //         console.log('Rol encontrado:', role.toJSON());
    
    //         user.RoleId = role.id;
    //         await user.save();
    
    //         console.log('Usuario después del cambio de rol:', user.toJSON());
    
    //         return res.redirect('/admin')
            
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).send('Error interno del servidor');
    //     }
    // },
    

    /* ------ antes estaba con este ------ */
    
    // search: async (req, res) => {
    //     try {
    //         const keywords = req.query.keywords;
    //         const products = await db.Image.findAll({
    //             include: [
    //                 {
    //                     model: db.Product,
    //                     where: {
    //                         [Op.or]: [
    //                             {
    //                                 name: {
    //                                     [Op.substring]: keywords
    //                                 }
    //                             },
    //                             {
    //                                 description: {
    //                                     [Op.substring]: keywords
    //                                 }
    //                             }
    //                         ]
    //                     }
    //                 }
    //             ]
    //         });

    //         return res.render('results', {
    //             products,
    //             keywords
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    search: (req, res) => {
	
		const keywords = req.query.keywords

		db.Product.findAll({
            include : ['brand','category','section','images'],
			where : {
				[Op.or] : [
					{
						name : {
							[Op.substring] : keywords
						}
					},
					{
						description : {
							[Op.substring] : keywords
						}
					},
				]
				
			}
		})
			.then(results => {
				return res.render('results',{
					results,
					toThousand,
					keywords
				})
			})
			.catch(error => console.log(error))

		
	},
};

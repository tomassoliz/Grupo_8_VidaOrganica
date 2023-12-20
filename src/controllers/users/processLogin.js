const db = require('../../database/models')
const { validationResult } = require('express-validator');

module.exports = (req, res) => {

    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const { email, remember } = req.body

       db.User.findOne({
            where: {
                email
            }
        })
            .then(user => {
                req.session.userLogin = {
                    id: user.id,
                    name: user.name,
                    rol: user.roleId
                }
                
                remember !== undefined && res.cookie('vidaOrganicaTheBest', req.session.userLogin, {
                    maxAge: 1000 * 60
                })

                /* carrito */
                
                // buscamos el user.id id de usuario y el estado
                db.Order.findOne({
                    where: {
                        userId: user.id,
                        // representa si hay una orden abierta o cerrada
                        statusId: 1
                    },
                    // las relaciones
                    include: [
                        {
                            association: 'items',
                            include: {
                                association: 'product',
                            }
                        }
                    ]
                    // preguntamos si hay una orden
                }).then(order => {
                    if (order) {
                        // SI ES QUE VIENE ORDER CREAMOS UNA SESION DE CARRITO
                        req.session.cart = {
                            orderId: order.id,
                            // que datos precisa del lado del producto
                            // map devuelve otro array
                            // aclaracion son vinculacion: items, product("as") que viene de relacion donde a su vez hace un desctructuring                
                            // EN PRODUCTOS GUARDAMOS UN ARRAY, Y LO CREAMOS A TRAVES DE MAPEAR UNA ITEM PORQUE UNA ORDEN TIENE MUCHOS ITEMS, MAPEAS PORQUE QUIERE GUARDAR UNA ESTRUCTURA DENTRO DE LA RED DE PRODUCTOO COMPATIBLE CON LO QUE QUIERE MOSTRAR EN EL FRONTEND
                            products: order.items.map(({ quantity, product: { id, name, image, price, discount } }) => {
                                return {
                                    id,
                                    name,
                                    image,
                                    price,
                                    discount,
                                    quantity,
                                }
                            }),
                            // REPRESENTA LA SUMATORIA DE TODOS LOS PRODUCTOS QUE ESTAN EN EL CARRITO, CREA UN ARRAY DE NUMEROS
                            // el 0 es porque si esta vacio te tira error, como valor inicial
                            total: order.items.map(item => item.product.price * item.quantity).reduce((a, b) => a + b, 0)
                        }

                        console.log(req.session.cart);

                        return res.redirect('/')

                    } else {
                        // SI NO HAY UNA ORDEN YO CREO UNA ORDEN
                        db.Order.create({
                            total: 0,
                            userId: user.id,
                            statusId: 1
                        }).then(order => {
                            // CREAMOS UNA SESION DE CARRITO PERO CON EL PRODUCT VACIO
                            req.session.cart = {
                                orderId: order.id,
                                products: [],
                                total: 0,
                            }
                            console.log(req.session.cart);
                            return res.redirect('/')

                        })
                    }
                })

            })
            .catch(error => console.log(error))

    } else {
        return res.render('login', {
            errors: errors.mapped(),
            old: req.body
        })
    }

}
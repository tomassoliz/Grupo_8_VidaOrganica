// funcion asincronica porque es una api, LA IDEA ES QUE SE HAGA PETICIONES POR ATRAS
const db = require('../database/models');
module.exports = {

    // mostrar los datos de carrito
    showAll: async (req, res) => {
        try {
            if (!req.session.cart) {
                let error = new Error()
                error.message = 'Tienes que iniciar sesion';
                error.status = 404;
                throw error
            }

            return res.status(200).json({
                ok: true,
                cart: req.session.cart,
                message: "Inicio de sesion exitoso"
            })

        } catch (error) {
            return res.status(error.status || 500).json({
                ok: false,
                cart: null,
                message: error.message || 'Hubo un error a la hora de iniciar sesion'
            })
        }

    },
    // cuando quiera agregar un algo al cart busca la session la grega un dato a la session y dsp guarda
    // agrega items al carrito
    addItem: async (req, res) => {
        try {

            if (!req.session.cart) {
                let error = new Error()
                error.message = 'Tienes que iniciar sesion';
                error.status = 404;
                throw error
            }

            // traemos quantity y el id de producto a traves de body, al poner product: id aseguramos de que estamos usando su id para el uso de front 
            const { quantity, product: id } = req.body;
            // esto traemos del product en processlogin
            const { name, image, price, discount } = await db.Product.findByPk(id);

            // me traigo el id del producto, se incluye el id??
            if (req.session.cart.products.map(product => product.id).includes(id)) {

                // aca sobreescribimos product 
                req.session.cart.products = req.session.cart.products.map(product => {
                    // como esta include esto se cumple
                    // id se parsea porque buscas el producto
                    if (product.id === +id) {
                        ++product.quantity
                    }
                    return product
                });

                /* base de datos */
                await db.Item.update(
                    {
                        // 
                        quantity: req.session.cart.products.find(product => product.id === +id).quantity
                    },
                    {
                        where: {
                            // donde queres actualizar 
                            orderId: req.session.cart.orderId,
                            // id que viene por body
                            productId: id
                        }
                    }
                )

            } else {
                // product que es un array pushear un objeto
                req.session.cart.products.push({
                    id,
                    name,
                    image,
                    price,
                    discount,
                    quantity,
                });

                /* base de datos */

                await db.Item.create({
                    quantity: 1,
                    orderId: req.session.cart.orderId,
                    productId: id
                })
            }

            // aca solamente me traiga el preceio por la cantidad por eso el map
            req.session.cart.total = req.session.cart.products.map(product => product.price * product.quantity).reduce((a, b) => a + b, 0)
            return res.status(200).json({
                ok: true,
                cart: req.session.cart,
                message: "Producto agregado exitosamente"
            })

        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                cart: null,
                message: error.message || 'Hubo un error'
            })
        }
    },
    // elimino los items del carrito
    removeItem: async (req, res) => {

        try {

            if (!req.session.cart) {
                let error = new Error()
                error.message = 'Tienes que iniciar sesion';
                error.status = 404;
                throw error
            }

            // tmb lo podemos pasar por query que parametrizada
            const { product: id } = req.query;
            // recorre el array de producto cuando lo mapeo de 
            req.session.cart.products = req.session.cart.products.map(product => {
                if (product.id === +id && product.quantity > 1 /* si es mayor a 1 borralo */) {
                    // cuando coincida le restamos
                    --product.quantity
                }
                return product
            });

            /* base de datos */
            await db.Item.update(
                {
                    // en este caso es igual que agregar porque depende del producto actualizado de arriba en el map 
                    quantity: req.session.cart.products.find(product => product.id === +id).quantity
                },
                {
                    where: {
                        orderId: req.session.cart.orderId,
                        productId: id
                    }
                }
            )

            req.session.cart.total = req.session.cart.products.map(product => product.price * product.quantity).reduce((a, b) => a + b, 0)
            return res.status(200).json({
                ok: true,
                cart: req.session.cart,
                message: "Producto eliminado"
            })

        } catch (error) {

            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                cart: null,
                message: error.message || 'Hubo un error'
            })
        }

    },
    removeAllItem: async (req, res) => {
        try {
            if (!req.session.cart) {
                let error = new Error()
                error.message = 'Tienes que iniciar sesion';
                error.status = 404;
                throw error
            }

            const { product: id } = req.query;

            // aca en ves d emap hacemos un filtrado
            req.session.cart.products = req.session.cart.products.filter(product => product.id !== +id);

            /* base de datos */
            await db.Item.destroy(
                {
                    where: {
                        orderId: req.session.cart.orderId,
                        productId: id
                    }
                }
            )

            req.session.cart.total = req.session.cart.products.map(product => product.price * product.quantity).reduce((a, b) => a + b, 0)
            return res.status(200).json({
                ok: true,
                cart: req.session.cart,
                message: "Producto eliminado"
            })

        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                cart: null,
                message: error.message || 'Hubo un error'
            })
        }
    },

    // vaciar el carrito 
    emptyCart: async (req, res) => {
        try {

            if (!req.session.cart) {
                let error = new Error()
                error.message = 'Tienes que iniciar sesion';
                error.status = 404;
                throw error
            }

            req.session.cart = {
                // recibe todo la propiedad que tiene
                ...req.session.cart,
                products: [],
                total: 0,
            }

            /* base de datos */
            await db.Item.destroy(
                {
                    where: {
                        // solo borrar todo lo que corresponden a la orden
                        orderId: req.session.cart.orderId,
                    }
                }
            )

            return res.status(200).json({
                ok: true,
                cart: req.session.cart,
                message: "Carrito vacio"
            })

        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                cart: null,
                message: error.message || 'Hubo un error'
            })
        }
    }
}
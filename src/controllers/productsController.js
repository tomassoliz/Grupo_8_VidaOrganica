module.exports = {
    products: (req,res) => {
    res.render('products')
    },
    productsDetails: (req, res) => {
        return res.render('productsDetails')
    },
    carrito: (req, res) => {
        return res.render('carrito')
    },
    add: (req, res) => {
        return res.render('productsAdd')
    },
    edit: (req, res) =>{
        return res.render('productsEdit')}
}
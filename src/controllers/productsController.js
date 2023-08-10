module.exports = {
    products:(req,res) =>{
        return res.render('productsDetails')
    },
    carrito: (req, res) =>{
        return res.render('carrito')
    }
}
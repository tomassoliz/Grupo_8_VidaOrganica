module.exports = {
    products:(req,res) =>{
        return res.render('productDetails')
    },
    carrito: (req, res) =>{
        return res.render('carrito')
    }
}
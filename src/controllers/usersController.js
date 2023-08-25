const { products } = require("./productsController")

module.exports = {

    admin: (req,res) => {
        res.render('products')
    },
    userAdmin: (req, res) => {
        res.render('userAdmin')
    },
    login:(req,res) =>{
        res.render('login')
    },
    register:(req,res) =>{
        return res.render('register')
    }
}
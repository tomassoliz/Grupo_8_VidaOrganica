module.exports = {
    login:(req,res) =>{
        return res.render('login')
    },
    register:(req,res) =>{
        return res.render('register')
    },
    carrito: (req, res) => {
        return res.render('carrito')
    },
    profile: (req, res) => {
        return res.render('profile')
    },
    updateProfile:(req,res) => {
        res.send(req.file)
    }
}

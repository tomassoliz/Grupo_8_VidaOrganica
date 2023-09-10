module.exports = {
    login : require('./users/login'),
    processLogin : require('./users/processLogin'),
    logout: require('./users/logout'),


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

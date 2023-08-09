module.exports = {
    login:(req,res) =>{
        res.render('login')
    },
    register:(req,res) =>{
        return res.render('register')
    }
}
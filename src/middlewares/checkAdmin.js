module.exports = (req,res,next) => {
    if(req.session.userLogin && req.session.userLogin.rol === 1){
        next()
    }else {
        return res.redirect('/users/login')
    }
}
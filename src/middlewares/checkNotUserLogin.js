module.exports = (req,res,next) => {
    if(!req.session.userLogin){
        next()
    }else {
        return res.redirect('/users/profile')
    }
}
// con este middlewear de ruta, chequeamos que el usuario este logeado
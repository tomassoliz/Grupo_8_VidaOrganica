module.exports = (req,res,next) => {
    if(req.cookies.vidaOrganicaTheBest){
        req.session.userLogin = req.cookies.vidaOrganicaTheBest
    }
    next()
}
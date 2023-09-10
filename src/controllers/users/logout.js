module.exports = (req,res) => {
    req.session.destroy();
    res.cookie('vidaOrganicaTheBest',null,{
        maxAge : -1
    })
    return res.redirect('/')
}
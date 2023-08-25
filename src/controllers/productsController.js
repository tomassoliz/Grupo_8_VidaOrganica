const products = require('../data/products.json')
module.exports = {
    edit: require('./products/edit'),
    remove: require('./products/remove'),
    add: require('./products/add'),
    create: require('./products/create'),
    detail: require('./products/detail'),
    update: require('./products/update') ,
    
    addImage : (req, res) => {
        return res.render('addImage')
    },
    storeImage : (req,res) => {
        return res.send(req.body)
    }
}

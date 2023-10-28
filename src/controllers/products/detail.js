const db = require('../../database/models')

module.exports = async (req, res) => {
    
    const product = await db.Image.findOne({
        where: {
            productId: req.params.id
        },
        include : [
            {
                model: db.Product
            }
        ]
    })
    return res.render('productsDetails', {
        product
    })
}
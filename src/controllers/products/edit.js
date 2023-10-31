const db = require('../../database/models')

module.exports = async (req, res) => {
  try {

    const images = await db.Image.findOne({ //trae una sola fiola
      where: {
        productId: req.params.id
      },
      include: [
        {
          model: db.Product
        }
      ]
    })

    // const products = await db.Product.findByPk(req.params.id);
    const brands = await db.Brand.findAll({
      order: ["name"],
    });
    const categories = await db.Category.findAll({
      order: ['name']
    });
    return res.render("productsEdit", {
      // ...products.dataValues, ya no lo necesito
      images,
      brands,
      categories
    })

  } catch (error) {
    console.log(error);
  }
}


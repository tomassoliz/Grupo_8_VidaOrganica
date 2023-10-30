const db = require('../../database/models')

module.exports = async (req, res) => {
  try {

    const images = await db.Image.findAll()
    const products = await db.Product.findByPk(req.params.id);
    const brands = await db.Brand.findAll({
      order: ["name"],
    });
    const categories = await db.Category.findAll({
      order: ['name']
    });
    return res.render("productsEdit", {
      ...products.dataValues,
      brands,
      categories,
      images
    })

  } catch (error) {
    console.log(error);
  }
}

// como hago para mostrar las categorias y marcas y no me guarda

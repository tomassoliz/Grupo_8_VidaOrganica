const db = require("../../database/models");

module.exports = (req, res) => {

  const product = db.Product.findByPk(req.params.id, {
    include: ['images']
  });
  const brands = db.Brand.findAll({
    order: ['name']
  })
  const categories = db.Category.findAll({
    order: ['name']
  })
  const sections = db.Section.findAll({
    order: ['name']
  });

  Promise.all([product, brands, categories,sections])
    .then(([product, brands, categories, sections]) => {
      return res.render("productsEdit", {
        ...product.dataValues,
        brands,
        categories,
        sections
      });
    })
    .catch(error => console.log(error))
}


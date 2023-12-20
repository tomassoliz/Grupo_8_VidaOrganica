const db = require('../../database/models')

module.exports = (req, res) => {

  const brands = db.Brand.findAll({
    order: ['name']
  });
  const categories = db.Category.findAll({
    order: ['name']
  })

  const sections = db.Section.findAll({
    order: ['name']
  });

  Promise.all([brands, categories, sections])
    .then(([brands, categories, sections]) => {
      return res.render("productsAdd", {
        brands,
        categories,
        sections
      });
    })
    .catch(error => console.log(error))

}
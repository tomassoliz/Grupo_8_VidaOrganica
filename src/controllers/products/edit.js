const { readJSON } = require("../../data");

module.exports = (req, res) => {
  const product = db.Product.findByPk(req.params.id, {
    include : ['images']
  });
  const brands = db.Brand.findAll({
    order: ["name"],
  });
  const categories = db.Categorie.findAll({
    order : ['name']
  });

  Promise.all([product, brands, categories])
    .then(([product, brands, categories]) => {
        return res.render("productsEdit", {
    ...product.dataValues,
    brands,
    categories
    })
  })
  .catch(error => console.log(error))
};

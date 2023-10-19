//const {readJSON} = require('../../data')
const db = require('../../database/models')
module.exports = (req, res) => {
    const brands = db.Brand.findAll({
        order : ['name']
      });
  
      const categories = db.Category.findAll({
        order : ['name']
      });
  
      Promise.all([brands, categories])
        .then(([brands, categories]) => {
          return res.render("productsAdd", {
            brands,
            categories
          });
        })
        .catch(error => console.log(error))
}
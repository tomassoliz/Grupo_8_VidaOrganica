//const {readJSON} = require('../../data')
const db = require('../../database/models')
module.exports = (req, res) => {
    /*const brands = readJSON('brands.json');
    const categories = readJSON('categories.json')

    return res.render('productsAdd', {
        brands: brands.sort((a,b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0),
        categories: categories.sort((a,b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
    })*/
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
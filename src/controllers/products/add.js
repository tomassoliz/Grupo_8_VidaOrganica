const {readJSON} = require('../../data')
module.exports = (req, res) => {
    const brands = readJSON('brands.json');
    const categories = readJSON('categories.json')

    return res.render('productsAdd', {
        brands: brands.sort((a,b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0),
        categories: categories.sort((a,b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
    })
}
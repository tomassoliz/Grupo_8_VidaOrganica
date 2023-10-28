const db = require('../../database/models')

module.exports = async (req, res) => {
  try {
    const brands = await db.Brand.findAll({
      order: ['name']
    });

    const categories = await db.Category.findAll({
      order: ['name']
    })

    const sections = await db.Section.findAll({
      order: ['name']
    })
    return res.render('productsAdd', {
      brands,
      categories,
      sections
    })
  } catch (error) {
    console.log(error)
  }
}
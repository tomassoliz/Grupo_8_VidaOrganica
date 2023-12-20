const db = require('../../database/models')

module.exports = async (req, res) => {
  try {
    const categories = await db.Category.findAll({
      include: Product,
    });

    return res.render('admin', {
      categories,
    });
  } catch (error) {

    return res.status(500).send('Internal Server Error');
  }
};
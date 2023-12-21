const db = require('../../database/models')

module.exports = async (req, res) => {
  try {
    const categories = db.Category.findAll({
      order: ['name']
    })

    return res.render('admin', {
      categories,
    });
  } catch (error) {

    return res.status(500).send('Internal Server Error');
  }
};
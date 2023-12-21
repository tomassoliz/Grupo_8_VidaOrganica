const db = require('../../database/models')

module.exports = async (req, res) => {
    try {   
      await db.Category.destroy({
        where: {
          id: req.params.id
        }
      })
      return res.redirect('/admin')

    } catch (error) {
      console.log(error);
    }
  }






const db = require('../../database/models')



module.exports = 

  async (req, res) => {
    
    console.log('ID del producto a eliminar:', req.params.id)
    try {
      
      await db.Category.destroy({
        where: {
          id: req.params.id
        }
      })
      console.log('Categoria eliminada => ')
      return res.redirect('/admin')

    } catch (error) {
      console.log(error);
    }
  }






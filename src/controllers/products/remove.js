const db = require('../../database/models')

module.exports = {

  destroy: async (req, res) => {
    
    console.log('ID del producto a eliminar:', req.params.id)
    try {
      await db.Image.destroy({
        where: {
          productId: req.params.id
        }
      })
      await db.Product.destroy({
        where: {
          id: req.params.id
        }
      })
      console.log('Producto eliminado => ')
      return res.redirect('/admin')

    } catch (error) {
      console.log(error);
    }
  }
}
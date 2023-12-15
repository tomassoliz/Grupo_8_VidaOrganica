
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
      console.log('Producto eliminado => ')
      return res.redirect('/admin')

    } catch (error) {
      console.log(error);
    }
  }






/*module.exports = (req, res) => {
    async (req, res) => {
        const { id } = req.params;
    
        try {
          const category = await db.Category.distroy.findByPk(id);
          if (!category) {
            return res.status(404).send('Categoría no encontrada');
          }
    
         return res.redirect('/admin')
        } catch (error) {
          console.error(error);
          res.status(500).send('Error interno del servidor');
        }
      }
    }
*/


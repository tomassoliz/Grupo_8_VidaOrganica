const db = require('../../database/models')

module.exports = 
    async (req, res) => {
        const { categoryId } = req.params;
    
        try {
          const categories = await db.Category.findByPk(categoryId);
          if (!categories) {
            return res.status(404).send('Categoría no encontrada');
          }
    
          res.render('admin/edit', {
             categories 
            });
        } catch (error) {
          console.error(error);
          res.status(500).send('Error interno del servidor');
        }
      }
    

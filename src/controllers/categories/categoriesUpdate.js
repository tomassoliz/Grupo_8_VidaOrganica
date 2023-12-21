const db = require('../../database/models')
module.exports = async(req,res) =>{
    
        const { id } = req.params;
        const { name } = req.body;
    
        try {
          const category = await db.Category.findByPk(id);
          if (!category) {
            return res.status(404).send('Categoría no encontrada');
          }
    
          category.name = name;
          await category.save();
    
          return res.redirect('/admin')
        } catch (error) {
          console.error(error);
          res.status(500).send('Error interno del servidor');
        }
    }


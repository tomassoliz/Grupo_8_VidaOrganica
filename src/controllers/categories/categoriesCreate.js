const db = require('../../database/models');

module.exports = async (req, res) => {


        try {
            
          const { name } = req.body;
          console.log(name)
      
          // Validar si el nombre de la categoría ya existe
          const existingCategory = await db.Category.findAll({
            order: ['name']

          });
      
          if (existingCategory.length > 0) {
            console.log('Error: La categoría ya existe');
            return res.status(400).send('La categoría ya existe');
          }
          // Crear la nueva categoría
          const categories = await db.Category.create({
            name: name,
          });
      
          return res.render('admin', {
                categories,
        });// Redirigir a la lista de categorías
        } catch (error) {
          console.error('Error al crear la categoría:', error);
          res.status(500).send('Error interno del servidor');
        }
      

}
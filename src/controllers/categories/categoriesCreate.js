const db = require('../../database/models');

module.exports = async (req, res) => {
        try {  
          const { name } = req.body;
          const categories = await db.Category.create({
            name: name,
          });
      
          return res.render('/admin', {
            categories
          })         
        } catch (error) {
          console.error('Error al crear la categoría:', error);
          res.status(500).send('Error interno del servidor');
        }
}
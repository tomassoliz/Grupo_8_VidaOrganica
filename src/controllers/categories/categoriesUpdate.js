/*
module.exports = (req, res) => {
    const categories = readJSON('categories.json');
    const id = req.params.id;
    const { name, subcategory } = req.body

    const categoryEdited = categories.map(category => {
        if (category.name === name) {

            // category.name = name.trim();
            category.subcategory = subcategory;
        }
        return category;
    })

    writeJSON(categoryEdited, 'categories.json')

    return res.redirect('/admin');
}*/

const db = require('../../database/models')
module.exports = async(req,res) =>{
    async (req, res) => {
        const { categoryId } = req.params;
        const { name } = req.body;
    
        try {
          const category = await db.Category.findByPk(categoryId);
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
}

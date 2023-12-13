/*const { readJSON, writeJSON } = require("../../data");
module.exports = (req,res)=>{
  console.log("estoy mandando este id")
  const categories = readJSON('categories.json')
 // const id = req.params.id
  const productModify = categories.filter(category => category.id !== id)
  writeJSON(productModify,'categories.json')
  return res.redirect('/admin')
}*/

const db = require('../../database/models')

module.exports = (req, res) => {
    async (req, res) => {
        const { categoryId } = req.params;
    
        try {
          const category = await db.Category.findByPk(categoryId);
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



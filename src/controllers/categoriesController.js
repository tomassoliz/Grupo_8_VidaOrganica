
/*module.exports = {  
    categoriesCreate: require('./categories/categoriesCreate'),
    categoriesAdd: require('./categories/categoriesAdd'),
    categoriesEdit: require('./categories/categoriesEdit'),
    categoriesRemove: require('./categories/categoriesRemove'),
    categoriesUpdate: require('./categories/categoriesUpdate'),
}*/

const db = require('../database/models');
const { Op } = require('sequelize');

module.exports = {
     
    listar: async (req, res) => {
        try {
          const categories = await db.Category.findAll();
          res.render('categories/index', { categories });
        } catch (error) {
          console.error(error);
          res.status(500).send('Error interno del servidor');
        }
      },
      update: async (req, res) => {
        const { categoryId } = req.params;
        const { name } = req.body;
    
        try {
          const category = await db.Category.findByPk(categoryId);
          if (!category) {
            return res.status(404).send('Categoría no encontrada');
          }
    
          category.name = name;
          await category.save();
    
          res.render('/categories/update');
        } catch (error) {
          console.error(error);
          res.status(500).send('Error interno del servidor');
        }
      },

      edit: async (req, res) => {
        const { categoryId } = req.params;
    
        try {
          const category = await db.Category.findByPk(categoryId);
          if (!category) {
            return res.status(404).send('Categoría no encontrada');
          }
    
          res.render('categories/edit', { category });
        } catch (error) {
          console.error(error);
          res.status(500).send('Error interno del servidor');
        }
      },

      delete: async (req, res) => {
        const { categoryId } = req.params;
    
        try {
          const category = await db.Category.findByPk(categoryId);
          if (!category) {
            return res.status(404).send('Categoría no encontrada');
          }
    
          res.render('categories/delete', { category });
        } catch (error) {
          console.error(error);
          res.status(500).send('Error interno del servidor');
        }
      },
    
      confirmDelete: async (req, res) => {
        const { categoryId } = req.params;
    
        try {
          const category = await db.Category.findByPk(categoryId);
          if (!category) {
            return res.status(404).send('Categoría no encontrada');
          }
    
          await category.destroy();
    
          res.redirect('/categories');
        } catch (error) {
          console.error(error);
          res.status(500).send('Error interno del servidor');
        }
      },

      create: async (req, res) => {
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
          const newCategory = await db.Category.create({
            name: name,
          });
      
           res.redirect('/categories/index'); // Redirigir a la lista de categorías
        } catch (error) {
          console.error('Error al crear la categoría:', error);
          res.status(500).send('Error interno del servidor');
        }
      

      },
      show: async (req, res) => {
        const { categoryId } = req.params;
    
        try {
          const category = await db.Category.findByPk(categoryId);
          if (!category) {
            return res.status(404).send('Categoría no encontrada');
          }
    
          res.render('categories/show', { category });
        } catch (error) {
          console.error(error);
          res.status(500).send('Error interno del servidor');
        }
      },

}
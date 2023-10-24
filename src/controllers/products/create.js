const {existsSync, unlinkSync} = require('fs')
const { validationResult } = require('express-validator');
const db = require('../../database/models');

module.exports = async (req, res) => {
  
    try {
        const errors = validationResult(req);

        if(errors.isEmpty()){
        
          const {name, price, discount, description, brand, section, category} = req.body

          const product = await db.Product.create({
            name : name.trim(),
            price,
            discount : discount || 0,
            description : description.trim(),
            brandId : brand,
            sectionId : section || 1,
            categoryId : category,
          })

          await db.Image.create({
              file: req.file.filename,
              productId: product.id
          })
          return res.status(200).redirect('/admin');
        } else {

          if(req.files.length){
            req.files.forEach(file => {
              existsSync('./public/images/' + file.filename) && unlinkSync('./public/images/' + file.filename)
            });
          }

           const brands = await db.Brand.findAll({
            order : ['name']
          });

          const categories = await db.Category.findAll({
            order : ['name']
          });
        

          Promise.all([brands, categories])
            .then(([brands, categories]) => {
              return res.render("productAdd", {
                brands,
                categories,
                errors : errors.mapped(),
                old : req.body
              });
            })
            .catch(error => console.log(error))
        }

    }
    catch (err) {
        console.log("Error Product create route: ", err);
    }
  

  }
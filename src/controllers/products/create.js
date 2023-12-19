const {validationResult} = require('express-validator');
const {existsSync, unlinkSync} = require('fs')
const db = require('../../database/models');

module.exports = async (req, res) => {
    
try {    const errors = validationResult(req);

    if(errors.isEmpty()){
      
      const {name, price, discount, description, brand, category/* , section */} = req.body

      db.Product.create({
        name : name.trim(),
        price,
        discount : discount || 0,
        description : description.trim(),
        brandId : brand,
        /* sectionId : section, */
        categoryId: category,
        image : req.files.image ? req.files.image[0].filename : null
      })
        .then(product => {

          if(req.files.images){
            const images = req.files.images.map((file) => {
                return {
                  file : file.filename,
                  main : false,
                  productId : product.id,
                }
            })

            db.Image.bulkCreate(images, {
              validate : true
            }).then(response => {
              return res.redirect('/admin');
            })
          }else{
            return res.redirect('/admin');

          }
        })
        .catch(error => console.log(error))
     

    }else {

      if(req.files.length){/* No Funciona // No se crea el producto PEROSigue Guardando las Imagenes */
        req.files.forEach(file => {
          existsSync('./public/images/img-products' + file.filename) && unlinkSync('./public/images/img-products' + file.filename)
        });
      }

      const brands = db.Brand.findAll({
        order : ['name']
      });
  
      const categories = db.Category.findAll({
        order: ['name']
      })
  
      const sections = db.Section.findAll({
        order : ['name']
      });
  
      Promise.all([brands, categories, sections])
        .then(([brands, categories/*, sections */]) => {
          return res.render("productsAdd", {
            brands,
            categories,
           /*  sections, */
            errors : errors.mapped(),
            old : req.body
          });
        })
        .catch(error => console.log(error))
    }
  }catch (error) {
    console.log("Error Product create route: ", error);
}


  
  }
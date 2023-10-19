const { response } = require('express')
const db = require('../../database/models')
   module.exports = {
    delete: function(req,res) {
      db.Product.findByPk(req.params.id)
        .then(product => {
          return res.render('productsEdit',{
            Product : product
          })
        }).catch(error => console.log(error))
    },
    destroy: function(req,res){
      db.Product.destroy({
        where : {
          id : req.params.id
        }
      }).then((response) =>{
        console.log('Producto eliminado =>',response)
        return res.redirect('/productsEdit')
      })
    }.catch(error => console.log(error))
   }
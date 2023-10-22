const db = require('../../database/models')

module.exports = {
  
 destroy: function(req,res){
   console.log('ID del producto a eliminar:', req.params.id)

   db.Product.destroy({
   where : {
        id : req.params.id
     }
    }).then((response) =>{
      console.log('Producto eliminado =>', response)
      return res.redirect('/admin')
   }).catch(error => console.log(error))
  }
}
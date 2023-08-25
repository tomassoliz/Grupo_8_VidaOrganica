const { readJSON, writeJSON } = require("../../data");
module.exports = (req,res)=>{
  const products = readJSON('products.json')
  const id = req.params.id
  const productModify = products.filter(product => product.id !== id)
  writeJSON(productModify,'products.json')
  return res.redirect('/admin')
}
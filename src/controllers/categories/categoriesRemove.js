const { readJSON, writeJSON } = require("../../data");
module.exports = (req,res)=>{
  console.log("estoy mandando este id")
  const categories = readJSON('categories.json')
 // const id = req.params.id
  const productModify = categories.filter(category => category.id !== id)
  writeJSON(productModify,'categories.json')
  return res.redirect('/admin')
}


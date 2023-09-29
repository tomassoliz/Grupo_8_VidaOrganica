const { readJSON } = require('../../data')

module.exports = (req, res) => {
    const categories = readJSON('categories.json')
    
    const id = req.params.id;
    const category = categories.find(category => category.id === id);

    return res.render('/admin', {
        ...category
    })
}
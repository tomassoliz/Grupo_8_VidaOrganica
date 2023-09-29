const { readJSON, writeJSON } = require('../../data');

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
}
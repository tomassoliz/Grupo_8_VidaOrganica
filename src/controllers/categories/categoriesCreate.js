
const { readJSON, writeJSON } = require('../../data');
const Categorie = require('../../data/Categorie');

module.exports = (req, res) => {

        const categories = readJSON('categories.json')
        let newCategorie = new Categorie(req.body);
        categories.push(newCategorie);

        writeJSON(categories, 'categories.json');
        return res.redirect('/admin');     
}


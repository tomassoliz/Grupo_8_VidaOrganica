const {readJSON} = require('../../data')

module.exports = (req, res) => {
    const categories = readJSON('categories.json')

    return res.render('/admin', {
       ...categories
    })
}
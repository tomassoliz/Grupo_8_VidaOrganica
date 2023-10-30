const { unlinkSync, existsSync } = require('fs');
const db = require('../../database/models');

module.exports = async (req, res) => {

    try {
        const id = req.params.id;
        const { name, brand, description, price, discount, category, section, image } = req.body // traigo la imagen

        if (req.file) {
            existsSync(`./public/images/${image}`) &&
            unlinkSync(`./public/images/${image}`) // ve si esxiste o no y recibo el nombre del front 

            await db.Image.update(
                {
                    file: req.file.filename // en caso de no existir crea la imagen
                },
                {
                    where: {
                        productId: id
                    }
                })
        } // esto para la imagen

        // para el producto
        await db.Product.update(
            {
                name: name.trim(),
                price,
                discount,
                brandId: brand,
                sectionId: section,
                categoryId: category,
                description: description.trim()
                // si no la imagen lo deja como esta 
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )
        return res.redirect('/admin')
    } catch (error) {
        console.log(error);
    }
}


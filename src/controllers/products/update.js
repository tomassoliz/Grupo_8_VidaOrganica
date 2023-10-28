const { unlinkSync, existsSync } = require('fs');
const db = require('../../database/models');

module.exports = (req, res) => {

    const id = req.params.id;
    const { name, brand, description, price, discount, category, section } = req.body

    db.Product.findByPk(id)

        .then((product) => {
            req.file.image &&
                existsSync(`./public/images/img-products${product.image}`) &&
                unlinkSync(`./public/images/img-products${product.image}`)

            db.Product.update({
                name: name.trim(),
                price,
                discount,
                brandId: brand,
                sectionId: section,
                categoryId: category,
                description: description.trim(),
                image: req.files.image ? req.files.image[0].filename : product.image

            },
                {
                    where: {
                        id : req.params.id
                    }
                })
                .then(() => {
                    if (req.files.images) {
                        product.images.forEach((image) => {
                            existsSync(`./public/images/${image.file}`) &&
                            unlinkSync(`./public/images/${image.file}`);
                        });
                        db.Image.destroy({
                            where: {
                                productId: id
                            }
                        })
                            .then(() => {
                                const images = req.files.images.map((file) => {
                                    return {
                                        file:file.filename,
                                        productId: product.id
                                    }
                                })
                            db.Image.bulkCreate(images, {
                                validate: true
                            })
                            .then((response) => {
                                return res.redirect('/admin')
                            })
                        })
                    } else {
                        return res.redirect('/admin')
                    }
                })
        })
        .catch(error => console.log(error))
}
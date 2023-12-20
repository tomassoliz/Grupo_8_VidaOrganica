const { unlinkSync, existsSync } = require("fs");
const db = require("../../database/models");

module.exports = (req, res) => {
  const id = req.params.id;
  const { name, brand, price, discount, section, category, description } = req.body;

  db.Product.findByPk(id, {
    include: ["images"],
  })
    .then((product) => {
      // si en req.files viene imagenes borrame del product la imagen
      req.files.image &&
        existsSync(`./public/images/${product.image}`) &&
        unlinkSync(`./public/images/${product.image}`);

      db.Product.update(
        {
          name: name.trim(),
          price,
          discount,
          brandId: brand,
          categoryId: category,
          sectionId: section,
          description: description.trim(),
          // si hay un cambio de imagen, acepto ese cambio de lo contrario mantiene la imagen que tiene
          image: req.files.image ? req.files.image[0].filename : product.image,
        },
        {
          where: {
            id,
          },
        }
      ).then(() => {
        if (req.files.images) {
          // recorremos las imagenes de producto
          product.images.forEach((image) => {
            // si existe image.file eliminalo
            existsSync(`./public/images/${image.file}`) &&
            unlinkSync(`./public/images/${image.file}`);
          });

          db.Image.destroy({
            where: {
              productId: id,
            },
          }).then(() => {
            const images = req.files.images.map((file) => {
              return {
                file: file.filename,
                main: false,
                productId: product.id,
              };
            });
            db.Image.bulkCreate(images, {
              validate: true,
            }).then((response) => {
              return res.redirect("/admin");
            });
          });
        } else {
          return res.redirect("/admin");
        }
      });
    })
    .catch((error) => console.log(error));
};


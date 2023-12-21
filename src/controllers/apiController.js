const db = require("../database/models");

// api para checkear el email

const checkEmail = async (req, res) => {
  try {
    // si no viene el email
    if (!req.query.email) {
      let error = new Error("Falta el parámetro email");
      error.status = 400;
      // lo arroja
      throw error;
    }

    const user = await db.User.findOne({
      where: {
        // manda informacion por query peticion sin cargar la pagina que hacepr atras
        email: req.query.email,
      },
    });

    return res.status(200).json({
      // respuesta 
      ok: true,
      data: user ? true : false,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Hay un error",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, discount, price, description, brandId, categoryId, sectionId } = req.body;

    const { id } = await db.Product.create({
      name: name.trim(),
      discount: discount || 0,
      price,
      description: description.trim(),
      brandId,
      sectionId,
      categoryId,
      image : req.files[0].filename,
    });

    /* EN CASO DE AGREGAR MUCHAS IMAGENES  */
    /*  if(req.files.length){
      await db.Image.create({
        file : req.files[0].filename,
        main : true,
        productId : id
      })
    } */

    const product = await db.Product.findByPk(id, {
      include: ["brand", "category", "section"],
    });

    product.image = `${req.protocol}://${req.get('host')}/images/img-products/${product.image}`

    return res.status(200).json({
      ok: true,
      msg: "El producto fue creado con éxito",
      data: product,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Hay un error",
      data: null,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { name, discount, price, description, brandId, categoryId, sectionId } = req.body;

    const product = await db.Product.findByPk(req.params.id, {
      include: ["brand", "category", "section"],
    });

    await db.Product.update(
      {
        name: name.trim(),
        discount: discount || 0,
        price,
        description: description.trim(),
        brandId,
        sectionId,
        categoryId,
        image : req.files.length ? req.files[0].filename : product.image
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    // RELOAD actualiza en la base de dato volviendo a leer la misma peticion
    product.reload();
    // generar una url que me acceda a la iamgen
    product.image = `${req.protocol}://${req.get('host')}/images/img-products/${product.image}`;

    return res.status(200).json({
      ok: true,
      msg: "El producto fue actualizado con éxito",
      data: product,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Hay un error",
      data: null,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await db.Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      ok: true,
      msg: "El producto fue eliminado con éxito",
      data: null,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Hay un error",
      data: null,
    });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const products = await db.Product.findAll({
      include: ["brand", "category", "section"],
    });

    const productsWithURLImages = products.map(product => {
      product.image = product.image ?  `${req.protocol}://${req.get('host')}/images/img-products/${product.image}` : null
      return product
    })

    return res.status(200).json({
      ok: true,
      data: productsWithURLImages,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Hay un error",
    });
  }
};

const getAllSections = async (req, res) => {
  try {
    const products = await db.Section.findAll();

    return res.status(200).json({
      ok: true,
      data: products,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Hay un error",
    });
  }
};

const getAllBrands = async (req, res) => {
  try {
    const products = await db.Brand.findAll();

    return res.status(200).json({
      ok: true,
      data: products,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Hay un error",
    });
  }
};

const getAllCategories = async (req, res) => {
    try {
      const products = await db.Category.findAll();
  
      return res.status(200).json({
        ok: true,
        data: products,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Hay un error",
      });
    }
  };

module.exports = {
  checkEmail,
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllBrands,
  getAllSections,
  getAllCategories
};
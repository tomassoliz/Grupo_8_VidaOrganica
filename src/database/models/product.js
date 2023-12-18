'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       Product.belongsTo(models.Brand, {
         as: 'brand',
         foreignKey: 'brandId'
       });
       Product.belongsTo(models.Category, {
         as : 'category',
         foreignKey: 'categoryId'
       });
       Product.belongsTo(models.Section,{
         as : 'section',
         foreignKey: 'sectionId'
       });
       Product.hasMany(models.Image, {
             as : 'images',
             foreignKey: 'productId',
             onDelete: 'CASCADE',
             hooks: true,
           })
      /* Product.belongsTo(models.Brand)
      Product.belongsTo(models.Category)
      Product.belongsTo(models.Section)
      Product.hasMany(models.Image) */
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    stock: DataTypes.INTEGER,
    // brandId: DataTypes.INTEGER,
    brandId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "brands", //referencia a la tabla 
        key: "id" //foreignKey de la tabla
      }
    },
    // categoryId: DataTypes.INTEGER,
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "categories",
        key: "id"
      }
    },
    // setionId: DataTypes.INTEGER,
    sectionId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      references: {
        model: "sections",
        key: "id"
      }
    },
    // imageId: DataTypes.STRING,
    /* imageId: {
      allowNull: true,
      type: DataTypes.STRING,
      references: {
        model: "images",
        key: "id"
      }
    }, */
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
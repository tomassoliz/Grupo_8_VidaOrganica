'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Image.belongsTo(models.Product);
      Image.hasMany(models.Product, {
        onDelete: 'CASCADE',
        hooks: true,
      });
    }
  }
  Image.init({
    file: DataTypes.STRING,
    main: DataTypes.STRING,
    // imageId: DataTypes.INTEGER
    productId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Products", 
        key: "id"
      }
    },
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
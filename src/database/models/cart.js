'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart.belongsTo(models.Order);
    }
  }
  Cart.init({
    total: DataTypes.INTEGER,
    subtotal: DataTypes.INTEGER,
    // productsId: DataTypes.INTEGER,
    productId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "products", 
        key: "id"
      }
    },
    // ordersId: DataTypes.INTEGER
    orderId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "orders", 
        key: "id"
      }
    },
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
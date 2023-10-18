'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User);
      Order.belongsTo(models.Cart);
    }
  }
  Order.init({
    total: DataTypes.INTEGER,
    date: DataTypes.DATE,
    // userId: DataTypes.INTEGER
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "users", 
        key: "id"
      }
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
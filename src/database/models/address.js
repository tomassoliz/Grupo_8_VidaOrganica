'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Address.hasMany(models.User);
    }
  }
  Address.init({
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    zipCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};
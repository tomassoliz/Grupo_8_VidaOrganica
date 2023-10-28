'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role);
      User.belongsTo(models.Address);
      User.hasMany(models.Order)
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    birthday: DataTypes.DATE,
    about: DataTypes.TEXT,
    call: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    // addressId: DataTypes.INTEGER,
    addressId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "addresses", 
        key: "id"
      }
    },
    // roleId: DataTypes.INTEGER
    roleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "roles", 
        key: "id"
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
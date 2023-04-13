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
      // define association here
    }
  }
  User.init({
    First_Name: { type: DataTypes.STRING, allowNull: false },
    Middle_Name: DataTypes.STRING,
    Last_Name:{ type: DataTypes.STRING, allowNull: false },
    Email: { type: DataTypes.STRING, allowNull: false ,unique:true},
    Password:{ type: DataTypes.STRING, allowNull: false,validate:{min:6,max:12} },
    Role:{
      type: DataTypes.STRING,
      defaultValue: "user",
    },
    Department: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
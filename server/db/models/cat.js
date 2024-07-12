'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order }) {
      this.hasOne(Order, { foreignKey: 'catId' })
    }
  }
  Cat.init({
    name: {
      type: DataTypes.STRING
    },
    catClass: {
      type: DataTypes.STRING
    },
    img: {
      type: DataTypes.STRING
    },
    place: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Cat',
  });
  return Cat;
};
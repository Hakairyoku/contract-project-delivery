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
    static associate({ User, Cat }) {
      this.belongsTo(User, { foreignKey: 'userId' })
      this.belongsTo(User, { foreignKey: 'hunterId' })
      this.belongsTo(Cat, { foreignKey: 'catId'})
    }
  }
  Order.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id"
      },
      onDelete: "CASCADE"
    },
    catId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Cats",
        key: "id"
      },
      onDelete: "CASCADE"
    },
    status: {
      type: DataTypes.BOOLEAN
    },
    hunterId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id"
      },
      onDelete: "CASCADE"
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
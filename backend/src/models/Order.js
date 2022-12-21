//external modules;
const { Model, DataTypes } = require('sequelize');

class Order extends Model {
  static init(sequelize) {
    super.init({}, { 
      sequelize, 
      tableName: 'orders' 
    });
  }

  static associate(models) {
    this.belongsTo(models.Pizza, { foreignKey: 'pizza_id', as: 'pizza' });
    this.belongsTo(models.Status, { foreignKey: 'status_id', as: 'status' });
  }
}

module.exports = Order;
//external modules;
const { Model, DataTypes } = require('sequelize');

class Status extends Model {
  static init(sequelize) {
    super.init({
      type: DataTypes.STRING,
    }, { 
      sequelize, 
      tableName: 'status' 
    });
  }

  static associate(models) {
    this.hasMany(models.Order, { foreignKey: 'status_id', as: 'status' });
  }
}

module.exports = Status;
//external modules;
const { Model, DataTypes } = require('sequelize');

class Dough extends Model {
  static init(sequelize) {
    super.init({
      type: DataTypes.STRING,
    }, { 
      sequelize, 
      tableName: 'doughes' 
    });
  }
}

module.exports = Dough;
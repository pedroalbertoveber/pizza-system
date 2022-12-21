//external modules;
const { Model, DataTypes } = require('sequelize');

class Edge extends Model {
  static init(sequelize) {
    super.init({
      type: DataTypes.STRING,
    }, { 
      sequelize, 
      tableName: 'edges' 
    });
  }
}

module.exports = Edge;
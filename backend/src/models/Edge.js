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

  static associate(models) {
    this.hasMany(models.Pizza, { foreignKey: 'edge_id', as: 'edges'});
  }
}

module.exports = Edge;
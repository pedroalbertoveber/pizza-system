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

  static associate(models) {
    this.hasMany(models.Pizza, { foreignKey: 'dough_id', as: 'doughes'});
  }
}

module.exports = Dough;
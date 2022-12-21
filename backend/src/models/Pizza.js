//external modules;
const { Model } = require('sequelize');

class Pizza extends Model {
  static init(sequelize) {
    super.init({},{ 
      sequelize, 
      tableName: 'pizzas' 
    });
  }

  static associate(models) {
    this.belongsTo(models.Dough, { foreignKey: 'dough_id', as: 'doughes'});
    this.belongsTo(models.Edge, { foreignKey: 'edge_id', as: 'edges'});
    this.belongsToMany(models.Flavor, { foreignKey: 'pizza_id', through: 'pizza_flavors', as: 'flavors' });
    this.hasOne(models.Order, { foreignKey: 'pizza_id', as: 'order' });
  }
}

module.exports = Pizza;
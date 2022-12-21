//external modules;
const { Model, DataTypes } = require('sequelize');

class Flavor extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, { 
      sequelize, 
      tableName: 'flavors' 
    });
  }

  static associate(models) {
    this.belongsToMany(models.Pizza, { foreignKey: 'flavor_id', through: 'pizza_flavors', as: 'pizzas' });
  }
}

module.exports = Flavor;
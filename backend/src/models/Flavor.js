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
}

module.exports = Flavor;
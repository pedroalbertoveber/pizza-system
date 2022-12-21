'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('pizza_flavors', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      flavor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'flavors', key: 'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      pizza_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'pizzas', key: 'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down (queryInterface, Sequelize) {
    return queryInterface.dropTable('pizza_flavors');
  },
};
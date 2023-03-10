'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      pizza_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'pizzas', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      status_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'status', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    return queryInterface.dropTable('orders');
  },
};
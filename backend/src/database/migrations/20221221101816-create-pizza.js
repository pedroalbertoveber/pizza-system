'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('pizzas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      dough_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'doughes', key: 'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      edge_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'edges', key: 'id'},
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
    return queryInterface.dropTable('pizzas');
  },
};

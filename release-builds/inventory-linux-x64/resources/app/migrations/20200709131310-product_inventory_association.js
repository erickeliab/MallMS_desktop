'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Inventories', // name of Target model
      'ProductId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products', // name of Source model
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Inventories', // name of Source model
      'ProductId' // key we want to remove
    );
  }
};

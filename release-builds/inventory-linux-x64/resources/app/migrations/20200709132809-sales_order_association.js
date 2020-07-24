'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Sales', // name of Source model
      'OrderID', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Orders', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Sales', // name of Source model
      'OrderID' // key we want to remove
    );
  }
};

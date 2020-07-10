'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Products', // name of Source model
      'SupplierID', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Suppliers', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Products', // name of Source model
      'SupplierId' // key we want to remove
    );
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [ {
      Name: 'Owner'
    },
    {
      Name: 'Shopkeeper'
    },
    {
      Name: 'Storekeeper'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', {
      Name: 'Owner'
    },
    {
      Name: 'Shopkeeper'
    },
    {
      Name: 'Storekeeper'
    }, {});
  }
};

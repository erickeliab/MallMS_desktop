'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Steve',
      lastName: 'Christian',
      email: 'steve@gmail.com',
      password: '123',
      phone: '0768767890',
      type : 'Owner'
    },
    {
      firstName: "StoneCold",
      lastName: "Austine",
      email: "stonecold@gmail.com",
      password: null,
      phone: '0768767890',
      type : 'Seller'
  },
  {
      firstName: "erick",
      lastName: "emmanuel",
      email: "erickemmanuel661@gmail.com",
      password: "133",
      phone: "0754385888",
      type : 'Seller'
  }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

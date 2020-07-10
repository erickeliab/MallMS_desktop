'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    quantity: DataTypes.STRING,
    TotalPrice: DataTypes.STRING,
    InventoryDate: DataTypes.STRING
  }, {});
  Inventory.associate = function(models) {
    // associations can be defined here
  };
  return Inventory;
};
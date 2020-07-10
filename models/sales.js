'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    CreatedDate: DataTypes.STRING
  }, {});
  Sales.associate = function(models) {
    // associations can be defined here

    Sales.belongsTo(models.Product);
    Sales.belongsTo(models.Order);
  };
  return Sales;
};
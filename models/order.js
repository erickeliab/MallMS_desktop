'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    Paid: DataTypes.STRING,
    TotalPrice: DataTypes.STRING,
    Created: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here

    Order.belongsTo(models.User);

  };
  return Order;
};
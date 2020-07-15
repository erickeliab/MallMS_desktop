'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    Description: DataTypes.STRING,
    SupplierID : DataTypes.STRING,
    CategoryID : DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here

    Product.belongsTo(models.Supplier);
    Product.hasOne(models.Inventory);
    Product.belongsTo(models.Category);
  };
  return Product;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    Type: DataTypes.STRING,
    Description: DataTypes.STRING,
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};
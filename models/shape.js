'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shape = sequelize.define('Shape', {
    Address: DataTypes.STRING,
    Suite: DataTypes.STRING,
    Urbanization: DataTypes.STRING,
    City: DataTypes.STRING,
    State: DataTypes.STRING,
    Zip: DataTypes.STRING,
    Plus4: DataTypes.STRING,
    BaseMAK: DataTypes.BIGINT,
    ShapeWKT: DataTypes.TEXT,
    Test1: DataTypes.BIGINT
  }, {});
  Shape.associate = function (models) {
    // associations can be defined here
    Shape.hasMany(models.Property)
  };
  return Shape;
};
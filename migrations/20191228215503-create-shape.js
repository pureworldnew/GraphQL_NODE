'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Shapes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      // MAK: {
      //   allowNull: false,
      //   primaryKey: true,
      //   type: Sequelize.BIGINT
      // },
      Address: {
        type: Sequelize.STRING
      },
      Suite: {
        type: Sequelize.STRING
      },
      Urbanization: {
        type: Sequelize.STRING
      },
      City: {
        type: Sequelize.STRING
      },
      State: {
        type: Sequelize.STRING
      },
      Zip: {
        type: Sequelize.STRING
      },
      Plus4: {
        type: Sequelize.STRING
      },
      BaseMAK: {
        type: Sequelize.BIGINT
      },
      ShapeWKT: {
        type: Sequelize.TEXT
      },
      Test1: {
        type: Sequelize.BIGINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Shapes');
  }
};
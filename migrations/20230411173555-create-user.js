'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      First_Name: {
        type: Sequelize.TEXT
      },
      Middle_Name: {
        type: Sequelize.TEXT
      },
      Last_Name: {
        type: Sequelize.TEXT
      },
      Email: {
        type: Sequelize.TEXT
      },
      Password: {
        type: Sequelize.TEXT
      },
      Role: {
        type: Sequelize.TEXT
      },
      Department: {
        type: Sequelize.TEXT
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
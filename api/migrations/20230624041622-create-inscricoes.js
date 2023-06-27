'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Inscricoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      data_cancelamento: {
        type: Sequelize.DATEONLY
      },
      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Usuarios', key: 'id' }
      },
      curso_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Cursos', key: 'id' }
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
    await queryInterface.dropTable('Inscricoes');
  }
};
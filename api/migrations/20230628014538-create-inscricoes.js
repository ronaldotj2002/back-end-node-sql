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
      data_inscricao: {
        type: Sequelize.DATEONLY
      },
      data_cancelamento: {
        type: Sequelize.DATEONLY
      },
      usuarioId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'usuarios', key: 'id' }
      },
      cursoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'cursos', key: 'id' }
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
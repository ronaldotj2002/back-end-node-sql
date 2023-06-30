'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Inscricoes', [
        {
        status: 'Ativo',
        data_inscricao: new Date(),
        data_cancelamento: new Date(),
        usuarioId: 5,
        cursoId: 1

      },
      {
        status: 'Ativo',
        data_inscricao: new Date(),
        data_cancelamento: new Date(),
        usuarioId: 6,
        cursoId: 2

      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

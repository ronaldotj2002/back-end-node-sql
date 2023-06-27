'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Inscricoes', [
        {
        status: 'Ativo',
        data_cancelamento: new Date(),
        usuario_id: 5,
        curso_id: 1

      },
      {
        status: 'Ativo',
        data_cancelamento: new Date(),
        usuario_id: 6,
        curso_id: 2

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

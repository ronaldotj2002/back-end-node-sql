'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Cursos', [
        {
        nome: 'Front-End',
        descricao: 'Curso de Angular CLI',
        data_inicio: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Back-End',
        descricao: 'Curso de Node js',
        data_inicio: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Clound',
        descricao: 'Curso de AWS',
        data_inicio: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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

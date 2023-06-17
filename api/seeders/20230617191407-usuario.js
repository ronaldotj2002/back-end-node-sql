'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert('Usuarios', [
      {
        login: 'luiz_lu',
        email: 'luizc@gmail.com',
        senha: 'luiz123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        login: 'rtj',
        email: 'ronaldo@gmail.com',
        senha: 'rtj123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        login: 'chris',
        email: 'chris@gmail.com',
        senha: 'chris123',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Usuarios', null, {});
     
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Inserir em lote
  async up (queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert('Pessoas', [
      { 
        nome: 'Luiz Carlos',
        cpf: 25874125874,
        email: 'luizc@gmail.com',
        tipoPessoa: 'aluno',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    { 
        nome: 'Ana Luiza Cardozo',
        cpf: 49205633698,
        email: 'ana@gmail.com',
        tipoPessoa: 'aluno',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    { 
        nome: 'Jose de Souza',
        cpf: 36525412547,
        email: 'jose-souza@gmail.com',
        tipoPessoa: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    { 
        nome: 'Christiane Ribeiro',
        cpf: 36985214785,
        email: 'chris@gmail.com',
        tipoPessoa: 'aluno',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    { 
        nome: 'Mario Luiz',
        cpf: 36254745458,
        email: 'mluiz@gmail.com',
        tipoPessoa: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    { 
        nome: 'Ronaldo Teixeira',
        cpf: 12345678912,
        email: 'ronaldo@gmail.com',
        tipoPessoa: 'aluno',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    { 
        nome: 'Vinicius Carlos',
        cpf: 22558877451,
        email: 'vinic@gmail.com',
        tipoPessoa: 'aluno',
        createdAt: new Date(),
        updatedAt: new Date()
    }
  ], {});
    
  },

  // Deletar em lote
  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('Pessoas', null, {});
    
  }
};

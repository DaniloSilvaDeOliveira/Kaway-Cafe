const bcrypt = require('bcryptjs');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuario', [
      {
        nome: 'João Cardoso',
        telefone: '(11) 99999-9999',
        cpf: bcrypt.hashSync('12345678910', 10),
        senha: bcrypt.hashSync('123456', 10),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Maria Cardoso',
        telefone: '(11) 64784-2912',
        cpf: bcrypt.hashSync('12345678910', 10),
        senha: bcrypt.hashSync('123456', 10),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Juliana Pereira',
        telefone: '(25) 96743-9745',
        cpf: bcrypt.hashSync('12345678910', 10),
        senha: bcrypt.hashSync('948356',10),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Pedro Henrique',
        telefone: '(11) 67890-7483',
        cpf: bcrypt.hashSync('12345678910', 10),
        senha: bcrypt.hashSync('794032',10),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Ana Maria',
        telefone: '(11) 67890-7483',
        cpf: bcrypt.hashSync('12345678910', 10),
        senha: bcrypt.hashSync('794032',10),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'José Silva',
        telefone: '(11) 67890-7483',
        cpf: bcrypt.hashSync('12345678910', 10),
        senha: bcrypt.hashSync('794032',10),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Maria Silva',
        telefone: '(11) 67890-7483',
        cpf: bcrypt.hashSync('12345678910', 10),
        senha: bcrypt.hashSync('794032',10),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Danilo Silva de Oliveira',
        telefone: '(11) 67890-7483',
        cpf: bcrypt.hashSync('12345678910', 10),
        senha: bcrypt.hashSync('123123',10),
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Clientes', null, {});
  }
};


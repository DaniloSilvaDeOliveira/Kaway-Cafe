module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Clientes', [
        {
          nome: 'João Cardoso',
          telefone: '(11) 99999-9999',
          senha: '123456',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Maria Cardoso',
          telefone: '(11) 64784-2912',
          senha: '1234523',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Juliana Pereira',
          telefone: '(25) 96743-9745',
          senha: '948356',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Pedro Henrique',
          telefone: '(11) 67890-7483',
          senha: '794032',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Ana Maria',
          telefone: '(11) 67890-7483',
          senha: '794032',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'José Silva',
          telefone: '(11) 67890-7483',
          senha: '794032',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Maria Silva',
          telefone: '(11) 67890-7483',
          senha: '794032',
          createdAt: new Date(),
          updatedAt: new Date()
        }

    ], {})
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Clientes', null, {});
  }
};


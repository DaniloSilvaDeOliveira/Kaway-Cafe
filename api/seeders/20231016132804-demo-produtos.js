module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Produtos', [
      {
        nome: 'Torta de Limão',
        preco: 7.50,
        descricao: 'Torta de limão com merengue',
        categoria: 'tortas',
        createdAT: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Torta de Morango',
        preco: 7.50,
        descricao: 'Torta de morango com chantilly',
        categoria: 'tortas',
        createdAT: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Torta de Chocolate',
        preco: 7.50,
        descricao: 'Torta de chocolate com cobertura de chocolate',
        categoria: 'tortas',
        createdAT: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Torta de Frango',
        preco: 7.50,
        descricao: 'Torta de frango com catupiry',
        categoria: 'tortas',
        createdAT: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Bolo de Cenoura',
        preco: 5.50,
        descricao: 'Bolo de cenoura com cobertura de chocolate',
        categoria: 'bolos',
        createdAT: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Bolo de Fubá cremoso com goiabada',
        preco: 4.50,
        descricao: 'Bolo de fubá com goiabada',
        categoria: 'bolos',
        createdAT: new Date(),
        updatedAt: new Date()
      },
      { 
        nome: 'Cappuccino',
        preco: 4.50,
        descricao: 'Cappuccino com chantilly',
        categoria: 'bebidas',
        createdAT: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Café',
        preco: 3.50,
        descricao: 'Café expresso',
        categoria: 'bebidas',
        createdAT: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Suco de laranja',
        preco: 4.50,
        descricao: 'Suco de laranja natural',
        categoria: 'bebidas',
        createdAT: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Suco de limão',
        preco: 4.50,
        descricao: 'Suco de limão natural',
        categoria: 'bebidas',
        createdAT: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Produtos', null, {});
  }
};


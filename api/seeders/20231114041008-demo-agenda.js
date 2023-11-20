'use strict';

function randomTime() {
  let date = new Date();
  date.setHours(Math.floor(Math.random() * 24));
  date.setMinutes(Math.floor(Math.random() * 60));
  date.setSeconds(Math.floor(Math.random() * 60));
  return date;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Agendas', [{
      horarioEntrada: randomTime(),
      horarioSaida: randomTime(),
      data: new Date(),
      precoFinal: 100.00,
      statusPagamento: 'Pago',
      nQuarto: 101,
      usuario_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      horarioEntrada: randomTime(),
      horarioSaida: randomTime(),
      data: new Date(),
      precoFinal: 100.00,
      statusPagamento: 'Pago',
      nQuarto: 101,
      usuario_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      horarioEntrada: randomTime(),
      horarioSaida: randomTime(),
      data: new Date(),
      precoFinal: 100.00,
      statusPagamento: 'Pago',
      nQuarto: 101,
      usuario_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      horarioEntrada: randomTime(),
      horarioSaida: randomTime(),
      data: new Date(),
      precoFinal: 100.00,
      statusPagamento: 'Pago',
      nQuarto: 101,
      usuario_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      horarioEntrada: randomTime(),
      horarioSaida: randomTime(),
      data: new Date(),
      precoFinal: 100.00,
      statusPagamento: 'Pago',
      nQuarto: 101,
      usuario_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      horarioEntrada: randomTime(),
      horarioSaida: randomTime(),
      data: new Date(),
      precoFinal: 100.00,
      statusPagamento: 'Pago',
      nQuarto: 101,
      usuario_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      horarioEntrada: randomTime(),
      horarioSaida: randomTime(),
      data: new Date(),
      precoFinal: 100.00,
      statusPagamento: 'Pago',
      nQuarto: 101,
      usuario_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      horarioEntrada: randomTime(),
      horarioSaida: randomTime(),
      data: new Date(),
      precoFinal: 100.00,
      statusPagamento: 'Pago',
      nQuarto: 101,
      usuario_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }

  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Agendas', null, {});
  }
};
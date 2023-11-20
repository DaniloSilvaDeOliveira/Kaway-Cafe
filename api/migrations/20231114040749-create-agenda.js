'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Agendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      horarioEntrada: {
        type: Sequelize.TIME
      },
      horarioSaida: {
        type: Sequelize.TIME
      },
      data: {
        type: Sequelize.DATEONLY
      },
      precoFinal: {
        type: Sequelize.FLOAT
      },
      statusPagamento: {
        type: Sequelize.STRING
      },
      nQuarto: {
        type: Sequelize.INTEGER
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuario', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Agendas');
  }
};
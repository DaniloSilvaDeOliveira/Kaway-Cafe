'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agenda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //associa o model Agenda com o model Usuario e adiciona um campo que identifica o usuario que fez o agendamento
        Agenda.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });

    }
  }
  Agenda.init({
    horarioEntrada: DataTypes.TIME,
    horarioSaida: DataTypes.TIME,
    data: DataTypes.DATEONLY,
    precoFinal: DataTypes.FLOAT,
    statusPagamento: DataTypes.STRING,
    nQuarto: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'Agenda',
  });
  return Agenda;
};
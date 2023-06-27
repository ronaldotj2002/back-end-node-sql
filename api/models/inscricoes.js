'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inscricoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Inscricoes.belongsTo(models.Usuarios, {foreignKey: 'usuario_id'})
      Inscricoes.belongsTo(models.Cursos, {foreignKey: 'curso_id'})
    }
  }
  Inscricoes.init({
    status: DataTypes.STRING,
    data_cancelamento: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Inscricoes',
  });
  return Inscricoes;
};
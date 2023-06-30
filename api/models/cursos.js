'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cursos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cursos.hasMany(models.Inscricoes)
    }
  }
  Cursos.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    data_inicio: DataTypes.DATEONLY,
    inscritos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cursos',
  });
  return Cursos;
};
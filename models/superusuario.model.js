/* jshint indent: 2 */
// const funciones = require("../functions/functions");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "superUsuarios",
    {
      id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      superroles_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
      },
      suscripciones_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      usuario: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        isEmail: true,
      },
      password: {
        type: DataTypes.STRING(64),
        is: /^[0-9a-f]{64}$/i,
        allowNull: false,
      },
      fechavenc: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: "0",
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "superUsuarios",
    }
  );
};

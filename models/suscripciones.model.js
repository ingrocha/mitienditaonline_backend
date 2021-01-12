/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "suscripciones",
    {
      id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      limites: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      meses: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: "1",
      },
      anual: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: "0",
      },
      administrador: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: "0",
      },
      activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: "1",
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
      tableName: "suscripciones",
    }
  );
};

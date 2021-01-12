/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "sucursales",
    {
      id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      superusuario_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      datosTiket: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      online: {
        type: DataTypes.BOOLEAN,
        defaultValue: "0",
      },
      datosOnline: {
        type: DataTypes.TEXT,
        allowNull: true,
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
      tableName: "sucursales",
    }
  );
};

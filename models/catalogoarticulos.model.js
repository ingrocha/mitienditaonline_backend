/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "catalogoarticulos",
    {
      id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      codigo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      departamento: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      codigosat: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      umedidaSAT: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: "catalogoarticulos",
      timestamps: false,
      hooks: {
        afterCreate() {},
      },
    }
  );
};

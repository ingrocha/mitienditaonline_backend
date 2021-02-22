/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "transferenciasarticulossolicitados",
    {
      id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      transferencias_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
      },
      articulos_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
      },
      codigo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      descipcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      simbolo: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      cantidad: {
        type: DataTypes.FLOAT,
      },
    },
    {
      tableName: "transferenciasarticulossolicitados",
    }
  );
};

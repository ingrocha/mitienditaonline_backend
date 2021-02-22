/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "transferencias",
    {
      id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      sucursales_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
        comment: "Sucursal que solicita la transferencia",
      },
      sucursales_id1: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
        comment: "Sucursal a la que solicita la transferencia",
      },
      usuarios_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
        comment: "Usuario que solicita la transferencia",
      },
      usuarios_id1: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
        comment: "Usuario que autorizo la transferencia",
      },
    },
    {
      tableName: "transferencias",
    }
  );
};

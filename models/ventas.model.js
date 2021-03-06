/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "ventas",
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
      },
      usuarios_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
      },
      clientes_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
      },
      total: {
        type: DataTypes.DECIMAL(10, 2),
      },
      credito: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: "ventas",
    }
  );
};

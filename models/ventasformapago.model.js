/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "ventasformapago",
    {
      id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      ventas_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
      },
      formaspago_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
      },
      usuarios_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
      },
    },
    {
      tableName: "ventasformapago",
    }
  );
};

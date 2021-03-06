/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "comprasarticulos",
    {
      id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      compras_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: false,
      },
      articulos_id: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        allowNull: true,
      },
      descripcion: {
        type: DataTypes.TEXT,
      },
      cantidad: {
        type: DataTypes.FLOAT,
      },
      preciou: {
        type: DataTypes.DECIMAL(10, 2),
      },
    },
    {
      tableName: "comprasarticulos",
    }
  );
};
